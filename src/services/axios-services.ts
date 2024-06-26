import { toast } from 'react-toastify';

import type { AxiosResponse } from 'axios';
import axios from 'axios';

import type { ApiError } from './response-error';

export class ApiService {
    private static Instance: ApiService;
    private baseURL: string = 'https://ma-backend-api.mocintra.com/api/v1/';

    private constructor() {
        axios.defaults.baseURL = this.baseURL;
        axios.interceptors.response.use(
            (response) => response,
            (error) => {
                toast.error(error.message);
                return Promise.reject(error);
            },
        );
    }

    static GetInstance(): ApiService {
        if (!ApiService.Instance) {
            ApiService.Instance = new ApiService();
        }
        return ApiService.Instance;
    }

    static IsAxiosError(error: ApiError | unknown): ApiError | void {
        if (axios.isAxiosError(error)) {
            return error;
        }
        return undefined;
    }

    async get<T>(url: string): Promise<T> {
        const response: AxiosResponse = await axios.get(url);
        return response.data as T;
    }
}
