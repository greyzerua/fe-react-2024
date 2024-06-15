import { useCallback, useEffect, useMemo, useState } from 'react';

import type { Category } from '@/interfaces/category';
import type { Product, ProductsResponse } from '@/interfaces/product';
import { ApiService } from '@/services/axios-services';

import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE, EProductsSort, PRODUCTS_SORTING } from '../constants';

export const useGetProducts = () => {
    const [categories, setCategories] = useState<Category['id'] | null>(null);
    const [sortType, setSortType] = useState<EProductsSort>(EProductsSort.PRICE_DESC);
    const [searchValue, setSearchValue] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(DEFAULT_PAGE);
    const [data, setData] = useState<Array<Product>>([]);
    const [totalCount, setTotalCount] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const queryParameters = useMemo(() => {
        const trimmedTitle = searchValue.trim();
        const parameters = {
            ...(categories === null ? {} : { categoryId: String(categories) }),
            ...(trimmedTitle.length > 0 ? { title: trimmedTitle } : {}),
            sortOrder: PRODUCTS_SORTING[sortType].type,
            limit: String(DEFAULT_PAGE_SIZE),
            offset: String(currentPage === DEFAULT_PAGE ? 0 : (currentPage - 1) * DEFAULT_PAGE_SIZE),
        };
        return new URLSearchParams(parameters).toString();
    }, [categories, sortType, searchValue, currentPage]);

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        const result = await ApiService.GetInstance().get<ProductsResponse>(`products?${queryParameters}`);
        setData(result.products);
        setTotalCount(result.total);
        setIsLoading(false);
    }, [queryParameters]);

    useEffect(() => {
        setCurrentPage(DEFAULT_PAGE);
    }, [categories, sortType, searchValue]);

    useEffect(() => {
        fetchData();
    }, [queryParameters, fetchData]);

    return { isLoading, data, totalCount, currentPage, setCategories, setSortType, setSearchValue, setCurrentPage, setTotalCount };
};
