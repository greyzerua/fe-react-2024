import { createSlice } from '@reduxjs/toolkit';

import type { Product } from '@/interfaces/product';
import { concatProducts } from '@/pages/products-page/utils/concat-products';

import { fetchProducts } from './thunks';

interface State {
    products: Array<Product>;
    total: number | null;
    filteredTotal: number | null;
    isLoading: boolean;
}

const INITIAL_STATE: State = {
    products: [],
    total: null,
    filteredTotal: null,
    isLoading: false,
};

export const productsSlice = createSlice({
    name: 'products',
    initialState: INITIAL_STATE,
    reducers: {
        setProducts(state, action) {
            state = action.payload;
            return state;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            const { shouldConcat, filters } = action.meta.arg;
            const isFilterApplied = Boolean(filters.categories || filters.searchValue.trim());

            state.products = shouldConcat ? concatProducts(state.products, action.payload.products) : action.payload.products;
            state.isLoading = false;
            if (isFilterApplied) {
                state.filteredTotal = action.payload.total;
            } else {
                state.total = action.payload.total;
                state.filteredTotal = null;
            }
        });
        builder.addCase(fetchProducts.rejected, (state) => {
            state.isLoading = false;
        });
    },
    selectors: {
        selectProducts: (state) => state.products,
        selectTotal: (state) => state.total,
        selectFilteredTotal: (state) => state.filteredTotal,
        selectIsLoading: (state) => state.isLoading,
    },
});

export const { setProducts } = productsSlice.actions;
export const { selectProducts, selectTotal, selectIsLoading, selectFilteredTotal } = productsSlice.selectors;

export default productsSlice.reducer;
