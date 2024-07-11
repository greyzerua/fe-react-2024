import { useCallback, useContext, useMemo, useState } from 'react';

import { SELECTED_PRODUCTS_KEY } from '@/config/local-storage-config';
import { CartCountContext } from '@/contexts/cart-count-context';
import type { SelectedProduct } from '@/interfaces/selected-product';
import type { SelectedProducts } from '@/types/selected-products';
import { getSelectedProducts } from '@/utils/get-selected-products';

import type { DeleteSelectedProduct, UpdateSelectedProductCount } from '../typedef';

export const useBasketProducts = () => {
    const [selectedProducts, setSelectedProducts] = useState<Array<SelectedProduct>>(Object.values(getSelectedProducts()));

    const { updateCount } = useContext(CartCountContext);

    const updateStorage = useCallback(
        (updatedProducts: SelectedProducts) => {
            localStorage.setItem(SELECTED_PRODUCTS_KEY, JSON.stringify(updatedProducts));
            setSelectedProducts(Object.values(updatedProducts));
            updateCount();
        },
        [updateCount],
    );

    const updateProductCount: UpdateSelectedProductCount = useCallback(
        (productId, count) => {
            const previousSelectedProducts = getSelectedProducts();
            const previousSelectedItem = previousSelectedProducts[productId];
            if (count !== previousSelectedItem.count) {
                const updatedSelectedProducts = {
                    ...previousSelectedProducts,
                    [productId]: {
                        ...previousSelectedItem,
                        count,
                    },
                };

                updateStorage(updatedSelectedProducts);
            }
        },
        [updateStorage],
    );

    const deleteSelectedProduct: DeleteSelectedProduct = useCallback(
        (productId) => {
            const previousSelectedProducts = getSelectedProducts();
            delete previousSelectedProducts[productId];
            updateStorage(previousSelectedProducts);
        },
        [updateStorage],
    );

    const totalPrice = useMemo(() => {
        let price = 0;
        selectedProducts.forEach((product) => {
            price += product.price * product.count;
        });
        return price;
    }, [selectedProducts]);

    return { selectedProducts, totalPrice, updateProductCount, deleteSelectedProduct };
};
