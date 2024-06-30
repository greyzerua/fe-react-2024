import { createAsyncThunk } from '@reduxjs/toolkit';

import type { Product } from '@/interfaces/product';
import { ApiService } from '@/services/axios-services';

import type { RejectedThunk } from '../typedef';

interface Parameters {
    productId: number;
}

interface ReturnType {
    product: Product;
}

export const fetchProduct = createAsyncThunk<ReturnType, Parameters, { rejectValue: RejectedThunk }>(
    'FETCH_PRODUCT',
    async ({ productId }: Parameters, thunkAPI) => {
        try {
            const result = await ApiService.GetInstance().get<Product>(`products/${productId}`);

            return { product: result };
        } catch (error) {
            const axiosError = ApiService.IsAxiosError(error);
            if (axiosError?.response) {
                const apiError = { message: axiosError.message, statusCode: axiosError.response.status };
                return thunkAPI.rejectWithValue(apiError);
            }
            return thunkAPI.rejectWithValue(null);
        }
    },
);
