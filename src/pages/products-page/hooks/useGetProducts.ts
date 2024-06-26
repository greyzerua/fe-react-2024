import { useCallback, useEffect, useMemo, useState } from 'react';

import { useCheckMobile } from '@/hooks/useCheckMobile';
import type { Category } from '@/interfaces/category';
import type { Product, ProductsResponse } from '@/interfaces/product';
import { ApiService } from '@/services/axios-services';

import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE, EProductsSort, INFINITE_SCROLL_WINDOW_WIDTH, PRODUCTS_SORTING } from '../constants';
import { concatProducts } from '../utils/concat-products';

export const useGetProducts = () => {
    const [categories, setCategories] = useState<Category['id'] | null>(null);
    const [sortType, setSortType] = useState<EProductsSort>(EProductsSort.PRICE_DESC);
    const [searchValue, setSearchValue] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(DEFAULT_PAGE);
    const [data, setData] = useState<Array<Product>>([]);
    const [totalCount, setTotalCount] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { isMobile: isInfinite } = useCheckMobile({ breakpoint: INFINITE_SCROLL_WINDOW_WIDTH });

    const queryParameters = useMemo(() => {
        const trimmedTitle = searchValue.trim();
        const parameters = {
            ...(categories === null ? {} : { categoryId: String(categories) }),
            ...(trimmedTitle ? { title: trimmedTitle } : {}),
            sortOrder: PRODUCTS_SORTING[sortType].type,
            limit: String(DEFAULT_PAGE_SIZE),
            offset: String(currentPage === DEFAULT_PAGE ? 0 : (currentPage - 1) * DEFAULT_PAGE_SIZE),
        };
        return new URLSearchParams(parameters).toString();
    }, [categories, sortType, searchValue, currentPage]);

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        const isFirstPage = queryParameters.includes('offset=0');
        const result = await ApiService.GetInstance().get<ProductsResponse>(`products?${queryParameters}`);
        setData((previousData) => (isInfinite && !isFirstPage ? concatProducts(previousData, result.products) : result.products));
        setTotalCount(result.total);
        setIsLoading(false);
    }, [queryParameters, isInfinite]);

    useEffect(() => {
        setCurrentPage(DEFAULT_PAGE);
    }, [categories, sortType, searchValue]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const loadMore = () => {
        setCurrentPage((previousCurrentPage) => ++previousCurrentPage);
    };

    return {
        isInfinite,
        isLoading,
        data,
        totalCount,
        currentPage,
        setCategories,
        setSortType,
        setSearchValue,
        setCurrentPage,
        setTotalCount,
        loadMore,
    };
};
