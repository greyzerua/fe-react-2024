import { useCallback, useEffect, useState } from 'react';

import type { Product } from '@/interfaces/product';

export const useProduct = (id?: number) => {
    const [product, setProduct] = useState<Product | null>(null);

    const getProduct = useCallback(
        (productId: number) => {
            fetch(`https://ma-backend-api.mocintra.com/api/v1/products/${productId}`)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error('Product not found');
                })
                .then((productResponse) => {
                    setProduct(productResponse);
                });
        },
        [setProduct],
    );

    useEffect(() => {
        if (id) {
            getProduct(id);
        }
    }, [id, getProduct]);

    return { product };
};
