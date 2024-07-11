import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { SELECTED_PRODUCTS_KEY } from '@/config/local-storage-config';
import { APP_LINK_URLS, EAppPage } from '@/constants/link-urls';
import { CartCountContext } from '@/contexts/cart-count-context';
import type { Product } from '@/interfaces/product';
import { getSelectedProducts } from '@/utils/get-selected-products';

import { useAuth } from './useAuth';

export const useAddToCart = (product: Product) => {
    const { id: productId, images, title, price } = product;

    const navigate = useNavigate();
    const { verifyToken, isAuthorized } = useAuth();

    const initialProductCount = getSelectedProducts()[productId]?.count || 0;
    const [productCount, setProductCount] = useState<number>(initialProductCount);

    const { updateCount } = useContext(CartCountContext);

    useEffect(() => {
        if (!isAuthorized) {
            updateCount();
            setProductCount(0);
        }
    }, [isAuthorized, updateCount]);

    const addProducts = () => {
        const selectedProductsStorage = getSelectedProducts();
        const newProductCount = productCount + 1;
        const newSelectedProducts = {
            ...selectedProductsStorage,
            [productId]: {
                productId,
                image: images[0],
                title,
                price,
                count: newProductCount,
            },
        };
        setProductCount(newProductCount);
        localStorage.setItem(SELECTED_PRODUCTS_KEY, JSON.stringify(newSelectedProducts));
        updateCount();
    };

    const addSelectedProduct = async () => {
        const result = await verifyToken();
        if (result?.isAuthorized) {
            addProducts();
        } else {
            navigate(APP_LINK_URLS[EAppPage.LOGIN]);
        }
    };

    return {
        addSelectedProduct,
        productCount,
    };
};
