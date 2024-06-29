import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { EHttpStatusCode } from '@/services/http-status-code';
import { selectProduct } from '@/store/product-details/slice';
import { fetchProduct } from '@/store/product-details/thunks';
import type { AppDispatch } from '@/store/store';
import type { RejectedThunk } from '@/store/typedef';

export const useProduct = (id?: number) => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const product = useSelector(selectProduct);

    const getProduct = useCallback(
        async (productId: number) => {
            try {
                await dispatch(fetchProduct({ productId })).unwrap();
            } catch (error: unknown) {
                const thunkError = error as RejectedThunk;
                if (thunkError?.statusCode === EHttpStatusCode.BAD_REQUEST) {
                    navigate('*');
                }
            }
        },
        [navigate, dispatch],
    );

    useEffect(() => {
        if (id) {
            getProduct(id);
        }
    }, [id, getProduct]);

    return { product };
};
