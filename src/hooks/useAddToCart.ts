import { useContext, useState } from 'react';

import { SELECTED_PRODUCTS_KEY } from '@/config/local-storage-config';
import { CartCountContext } from '@/contexts/cart-count-context';
import { getSelectedProducts } from '@/utils/get-selected-products';

export const useAddToCart = (productId: number) => {
    const initialProductCount = getSelectedProducts()[productId]?.count || 0;
    const [productCount, setProductCount] = useState<number>(initialProductCount);

    const { updateCount } = useContext(CartCountContext);

    const addSelectedProduct = () => {
        const selectedProductsStorage = getSelectedProducts();
        const newProductCount = productCount + 1;
        const newSelectedProducts = {
            ...selectedProductsStorage,
            [productId]: { count: newProductCount },
        };
        setProductCount(newProductCount);
        localStorage.setItem(SELECTED_PRODUCTS_KEY, JSON.stringify(newSelectedProducts));
        updateCount();
    };

    return {
        addSelectedProduct,
        productCount,
    };
};
