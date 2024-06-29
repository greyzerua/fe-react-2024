import { createAsyncThunk } from '@reduxjs/toolkit';

import type { Product, ProductsResponse } from '@/interfaces/product';
import { ApiService } from '@/services/axios-services';

interface Parameters {
    queryParameters: string;
    shouldConcat: boolean;
}

interface ReturnType {
    total: number;
    products: Array<Product>;
}

export const fetchProducts = createAsyncThunk<ReturnType, Parameters>('FETCH_PRODUCTS', async ({ queryParameters }: Parameters) => {
    const result = await ApiService.GetInstance().get<ProductsResponse>(`products?${queryParameters}`);
    return { products: result.products, total: result.total };
});
