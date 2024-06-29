import { createSlice } from '@reduxjs/toolkit';

import { getDefaultTheme } from '@/utils/get-default-theme';

export const themeSlice = createSlice({
    name: 'theme',
    initialState: getDefaultTheme(),
    reducers: {
        setTheme(state, action) {
            state = action.payload;
            return state;
        },
    },
    selectors: {
        selectTheme: (state) => state,
    },
});

export const { setTheme } = themeSlice.actions;
export const { selectTheme } = themeSlice.selectors;

export default themeSlice.reducer;
