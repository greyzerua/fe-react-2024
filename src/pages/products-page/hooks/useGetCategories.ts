import { useCallback, useEffect, useState } from 'react';

import type { Category } from '@/interfaces/category';
import { ApiService } from '@/services/axios-services';

export const useGetCategories = () => {
    const [categories, setCategories] = useState<Array<Category>>([]);

    const getCategories = useCallback(async () => {
        const result = await ApiService.GetInstance().get<Array<Category>>('categories');
        setCategories(result);
    }, []);

    useEffect(() => {
        getCategories();
    }, [getCategories]);

    return { categories };
};
