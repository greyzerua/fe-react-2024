import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCategories } from '@/store/categories/slice';
import { fetchCategories } from '@/store/categories/thunks';
import type { AppDispatch } from '@/store/store';

export const useGetCategories = () => {
    const dispatch = useDispatch<AppDispatch>();
    const categories = useSelector(selectCategories);

    const getCategories = useCallback(async () => {
        dispatch(fetchCategories());
    }, [dispatch]);

    useEffect(() => {
        getCategories();
    }, [getCategories]);
    return { categories };
};
