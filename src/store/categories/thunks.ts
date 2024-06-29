import { createAsyncThunk } from '@reduxjs/toolkit';

import type { Category } from '@/interfaces/category';
import { ApiService } from '@/services/axios-services';

interface ReturnType {
    categories: Array<Category>;
}

export const fetchCategories = createAsyncThunk<ReturnType>('FETCH_CATEGORIES', async () => {
    const result = await ApiService.GetInstance().get<Array<Category>>('categories');
    return { categories: result };
});
