import type { Product } from '@/interfaces/product';

export const concatProducts = (previousProducts: Array<Product>, newProducts: Array<Product>) => {
    const updatedProducts = [...previousProducts];
    newProducts.forEach((currentProduct) => {
        if (!updatedProducts.some((product) => product.id === currentProduct.id)) {
            updatedProducts.push(currentProduct);
        }
    });
    return updatedProducts;
};
