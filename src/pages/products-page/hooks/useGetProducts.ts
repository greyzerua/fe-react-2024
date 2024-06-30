import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useCheckMobile } from '@/hooks/useCheckMobile';
import type { Category } from '@/interfaces/category';
import { selectPagination, setLoadMore, setPagination } from '@/store/pagination/slice';
import { selectFilteredTotal, selectIsLoading, selectProducts, selectTotal } from '@/store/products/slice';
import { fetchProducts } from '@/store/products/thunks';
import { selectFilter, setCategory, setSearchValue, setSortType } from '@/store/products-filter/slice';
import type { AppDispatch } from '@/store/store';

import type { EProductsSort } from '../constants';
import { DEFAULT_PAGE, INFINITE_SCROLL_WINDOW_WIDTH } from '../constants';

export const useGetProducts = () => {
    const dispatch = useDispatch<AppDispatch>();

    const currentPage = useSelector(selectPagination);
    const filters = useSelector(selectFilter);

    const data = useSelector(selectProducts);
    const totalCount = useSelector(selectTotal);
    const filteredTotalCount = useSelector(selectFilteredTotal);
    const isLoading = useSelector(selectIsLoading);

    const { isMobile: isInfinite } = useCheckMobile({ breakpoint: INFINITE_SCROLL_WINDOW_WIDTH });

    const fetchData = useCallback(() => {
        const isFirstPage = currentPage === DEFAULT_PAGE;
        dispatch(fetchProducts({ currentPage, filters, shouldConcat: isInfinite && !isFirstPage }));
    }, [currentPage, filters, isInfinite, dispatch]);

    const setCurrentPage = useCallback(
        (page: number) => {
            dispatch(setPagination(page));
        },
        [dispatch],
    );

    const onChangeSortType = useCallback(
        (sort: EProductsSort) => {
            dispatch(setSortType(sort));
        },
        [dispatch],
    );

    const onChangeCategories = useCallback(
        (category: Category['id'] | null) => {
            dispatch(setCategory(category));
        },
        [dispatch],
    );

    const onChangeSearchValue = useCallback(
        (value: string) => {
            dispatch(setSearchValue(value));
        },
        [dispatch],
    );

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const loadMore = useCallback(() => {
        dispatch(setLoadMore());
    }, [dispatch]);

    return {
        isInfinite,
        isLoading,
        data,
        totalCount,
        filteredTotalCount,
        paginationTotalCount: filteredTotalCount || totalCount,
        currentPage,
        setCategories: onChangeCategories,
        setSortType: onChangeSortType,
        setSearchValue: onChangeSearchValue,
        setCurrentPage,
        loadMore,
    };
};
