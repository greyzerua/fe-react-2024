import { createSlice } from '@reduxjs/toolkit';

import type { Product } from '@/interfaces/product';

import { fetchProduct } from './thunks';

interface State {
    product: Product | null;
}

const INITIAL_STATE: State = {
    product: null,
};

export const productSlice = createSlice({
    name: 'product',
    initialState: INITIAL_STATE,
    reducers: {
        setProduct(state, action) {
            state = action.payload;
            return state;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.product = action.payload.product;
        });
    },
    selectors: {
        selectProduct: (state) => state.product,
    },
});

export const { setProduct } = productSlice.actions;
export const { selectProduct } = productSlice.selectors;

export default productSlice.reducer;
