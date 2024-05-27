import { PRODUCTS } from '@/data/products';
import type { Category } from '@/interfaces/category';

import type { EProductsSort } from '../constants';
import { PRODUCTS_SORTING } from '../constants';

interface Parameters {
    selectedCategories: Array<Category['id']>;
    sortType: EProductsSort;
    searchValue: string;
}

export const getFilteredProducts = ({ selectedCategories, sortType, searchValue }: Parameters) => {
    let filteredProducts = PRODUCTS;

    if (selectedCategories.length > 0) {
        filteredProducts = filteredProducts.filter((product) => selectedCategories.includes(product.category.id));
    }

    const trimmedSearch = searchValue.trim();

    if (trimmedSearch.length > 0) {
        filteredProducts = filteredProducts.filter((product) => product.title.toLowerCase().includes(trimmedSearch.toLowerCase()));
    }

    if (sortType) {
        const sortPredicate = PRODUCTS_SORTING[sortType].predicate;
        filteredProducts.sort(sortPredicate);
    }

    return filteredProducts;
};
