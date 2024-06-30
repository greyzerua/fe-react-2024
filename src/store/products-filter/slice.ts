import { createSlice } from '@reduxjs/toolkit';

import type { Category } from '@/interfaces/category';
import { EProductsSort } from '@/pages/products-page/constants';

interface State {
    categories: Category['id'] | null;
    sortType: EProductsSort;
    searchValue: string;
}

const INITIAL_STATE: State = {
    categories: null,
    sortType: EProductsSort.PRICE_DESC,
    searchValue: '',
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState: INITIAL_STATE,
    reducers: {
        setFilter(state, action) {
            state = action.payload;
        },
        setSortType(state, action) {
            state.sortType = action.payload;
        },
        setCategory(state, action) {
            state.categories = action.payload;
        },
        setSearchValue(state, action) {
            state.searchValue = action.payload;
        },
    },
    selectors: {
        selectFilter: (state) => state,
    },
});

export const { setFilter, setSortType, setCategory, setSearchValue } = filterSlice.actions;
export const { selectFilter } = filterSlice.selectors;

export default filterSlice.reducer;
