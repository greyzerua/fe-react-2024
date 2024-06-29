import { createSlice } from '@reduxjs/toolkit';

import type { Product } from '@/interfaces/product';
import { concatProducts } from '@/pages/products-page/utils/concat-products';

import { fetchProducts } from './thunks';

interface State {
    products: Array<Product>;
    total: number | null;
    isLoading: boolean;
}

const INITIAL_STATE: State = {
    products: [],
    total: null,
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
            state.products = action.meta.arg.shouldConcat
                ? concatProducts(state.products, action.payload.products)
                : action.payload.products;
            state.total = action.payload.total;
            state.isLoading = false;
        });
        builder.addCase(fetchProducts.rejected, (state) => {
            state.isLoading = false;
        });
    },
    selectors: {
        selectProducts: (state) => state.products,
        selectTotal: (state) => state.total,
        selectIsLoading: (state) => state.isLoading,
    },
});

export const { setProducts } = productsSlice.actions;
export const { selectProducts, selectTotal, selectIsLoading } = productsSlice.selectors;

export default productsSlice.reducer;
