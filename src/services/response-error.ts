import type { AxiosError } from 'axios';

export interface ResponseError {
    path: string;
    message: string;
    timestamp: string;
    name: string;
}

export type ApiError = AxiosError<ResponseError, undefined>;
