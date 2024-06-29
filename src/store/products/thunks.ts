import { createAsyncThunk } from '@reduxjs/toolkit';

import type { Category } from '@/interfaces/category';
import type { Product, ProductsResponse } from '@/interfaces/product';
import type { EProductsSort } from '@/pages/products-page/constants';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE, PRODUCTS_SORTING } from '@/pages/products-page/constants';
import { ApiService } from '@/services/axios-services';

interface Parameters {
    currentPage: number;
    filters: {
        categories: Category['id'] | null;
        sortType: EProductsSort;
        searchValue: string;
    };
    shouldConcat: boolean;
}

const getQueryParameters = (filters: Parameters['filters'], currentPage: Parameters['currentPage']) => {
    const { searchValue, categories, sortType } = filters;
    const trimmedTitle = searchValue.trim();
    const parameters = {
        ...(categories === null ? {} : { categoryId: String(categories) }),
        ...(trimmedTitle ? { title: trimmedTitle } : {}),
        sortOrder: PRODUCTS_SORTING[sortType].type,
        limit: String(DEFAULT_PAGE_SIZE),
        offset: String(currentPage === DEFAULT_PAGE ? 0 : (currentPage - 1) * DEFAULT_PAGE_SIZE),
    };
    return new URLSearchParams(parameters).toString();
};

interface ReturnType {
    total: number;
    products: Array<Product>;
}

export const fetchProducts = createAsyncThunk<ReturnType, Parameters>('FETCH_PRODUCTS', async ({ currentPage, filters }: Parameters) => {
    const queryParameters = getQueryParameters(filters, currentPage);
    const result = await ApiService.GetInstance().get<ProductsResponse>(`products?${queryParameters}`);
    return { products: result.products, total: result.total };
});
