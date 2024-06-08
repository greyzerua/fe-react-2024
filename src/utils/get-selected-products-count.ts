import { getSelectedProducts } from './get-selected-products';

export const getSelectedProductsCount = () => {
    const selectedProducts = getSelectedProducts();

    return Object.values(selectedProducts).reduce((accumulator, item) => accumulator + item.count, 0);
};
