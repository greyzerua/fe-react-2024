import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { AUTH_TOKEN_KEY, REFRESH_TOKEN_KEY, SELECTED_PRODUCTS_KEY } from '@/config/local-storage-config';
import { ApiService } from '@/services/axios-services';
import { EHttpStatusCode } from '@/services/http-status-code';

import type { AppDispatch } from '../store';
import type { RejectedThunk } from '../typedef';

export interface LoginParameters {
    email: string;
    password: string;
}

interface ReturnType {
    isAuthorized: boolean;
}

interface LoginResponse {
    refresh_token: string;
    access_token: string;
}

export const login = createAsyncThunk<ReturnType, LoginParameters, { rejectValue: RejectedThunk }>(
    'AUTH_LOGIN',
    async (requestBody, thunkAPI) => {
        try {
            const result = await ApiService.GetInstance().post<LoginParameters, LoginResponse>('auth/login', requestBody);

            sessionStorage.setItem(REFRESH_TOKEN_KEY, result.refresh_token);
            sessionStorage.setItem(AUTH_TOKEN_KEY, result.access_token);

            ApiService.SetRequestHeaders();

            return {
                isAuthorized: true,
            };
        } catch (error) {
            const axiosError = ApiService.IsAxiosError(error);
            if (axiosError?.response) {
                const apiError = { message: axiosError.message, statusCode: axiosError.response.status };
                return thunkAPI.rejectWithValue(apiError);
            }
            return thunkAPI.rejectWithValue(null);
        }
    },
);

export const logout = createAction('AUTH_LOGOUT', () => {
    sessionStorage.removeItem(REFRESH_TOKEN_KEY);
    sessionStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(SELECTED_PRODUCTS_KEY);
    ApiService.SetRequestHeaders();

    return {
        payload: {
            isAuthorized: false,
        },
    };
});

export const tokenVerify = createAsyncThunk<ReturnType, void, { rejectValue: RejectedThunk; dispatch: AppDispatch }>(
    'AUTH_VERIFY',
    async (argument, thunkAPI) => {
        const token = sessionStorage.getItem(AUTH_TOKEN_KEY);

        if (!token) {
            thunkAPI.dispatch(logout());
            return thunkAPI.rejectWithValue({ statusCode: EHttpStatusCode.UNAUTHORIZED, message: 'Unautorized' });
        }

        try {
            await ApiService.GetInstance().get<boolean>('auth/verify');

            return {
                isAuthorized: true,
            };
        } catch (error) {
            const axiosError = ApiService.IsAxiosError(error);
            thunkAPI.dispatch(logout());

            if (axiosError?.response) {
                const apiError = { message: axiosError.message, statusCode: axiosError.response.status };
                return thunkAPI.rejectWithValue(apiError);
            }
            return thunkAPI.rejectWithValue(null);
        }
    },
);
