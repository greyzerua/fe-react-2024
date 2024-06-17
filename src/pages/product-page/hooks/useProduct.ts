import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import type { Product } from '@/interfaces/product';
import { ApiService } from '@/services/axios-services';

export const useProduct = (id?: number) => {
    const navigate = useNavigate();
    const [product, setProduct] = useState<Product | null>(null);

    const getProduct = useCallback(
        async (productId: number) => {
            try {
                const result = await ApiService.GetInstance().get<Product>(`products/${productId}`);
                setProduct(result);
            } catch (error: unknown) {
                const axiosError = ApiService.IsAxiosError(error);
                if (axiosError?.response?.status === 400) {
                    navigate('*');
                }
            }
        },
        [setProduct, navigate],
    );

    useEffect(() => {
        if (id) {
            getProduct(id);
        }
    }, [id, getProduct]);

    return { product };
};
