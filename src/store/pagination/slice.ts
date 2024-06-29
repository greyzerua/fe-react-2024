import { createSlice } from '@reduxjs/toolkit';

import { DEFAULT_PAGE } from '@/pages/products-page/constants';

import { setCategory, setSearchValue, setSortType } from '../products-filter/slice';

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState: {
        defaultPage: DEFAULT_PAGE,
    },
    reducers: {
        setPagination(state, action) {
            state.defaultPage = action.payload;
        },
        setLoadMore(state) {
            state.defaultPage += 1;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(setSortType, (state) => {
                state.defaultPage = 1;
            })
            .addCase(setCategory, (state) => {
                state.defaultPage = 1;
            })
            .addCase(setSearchValue, (state) => {
                state.defaultPage = 1;
            });
    },
    selectors: {
        selectPagination: (state) => state.defaultPage,
    },
});

export const { setPagination, setLoadMore } = paginationSlice.actions;
export const { selectPagination } = paginationSlice.selectors;

export default paginationSlice.reducer;
