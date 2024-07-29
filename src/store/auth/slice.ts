import { createSlice } from '@reduxjs/toolkit';

import { AUTH_TOKEN_KEY } from '@/config/local-storage-config';

import { login, logout, tokenVerify } from './thunks';

const token = sessionStorage.getItem(AUTH_TOKEN_KEY);

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthorized: Boolean(token),
    },
    reducers: {
        setIsAuthorized(state, action) {
            state.isAuthorized = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.isAuthorized = action.payload.isAuthorized;
        });
        builder.addCase(tokenVerify.fulfilled, (state, action) => {
            state.isAuthorized = action.payload.isAuthorized;
        });
        builder.addCase(logout, (state, action) => {
            state.isAuthorized = action.payload.isAuthorized;
        });
    },
    selectors: {
        selectIsAuthorized: (state) => state.isAuthorized,
    },
});

export const { setIsAuthorized } = authSlice.actions;
export const { selectIsAuthorized } = authSlice.selectors;

export default authSlice.reducer;
