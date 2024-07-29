import { createSlice } from '@reduxjs/toolkit';

import type { Category } from '@/interfaces/category';

import { fetchCategories } from './thunks';

interface State {
    categories: Array<Category>;
}

const INITIAL_STATE: State = {
    categories: [],
};

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: INITIAL_STATE,
    reducers: {
        setCategories(state, action) {
            state.categories = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.categories = action.payload.categories;
        });
    },
    selectors: {
        selectCategories: (state) => state.categories,
    },
});

export const { setCategories } = categoriesSlice.actions;
export const { selectCategories } = categoriesSlice.selectors;

export default categoriesSlice.reducer;
