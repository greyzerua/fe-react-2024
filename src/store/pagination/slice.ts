import { createSlice } from '@reduxjs/toolkit';

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState: {},
    reducers: {
        setPagination(state, action) {
            state = action.payload;
            return state;
        },
    },
    selectors: {
        selectPagination: (state) => state,
    },
});

export const { setPagination } = paginationSlice.actions;
export const { selectPagination } = paginationSlice.selectors;

export default paginationSlice.reducer;
