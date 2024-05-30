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

    const trimmedSearch = searchValue.trim();

    if (selectedCategories.length > 0 || trimmedSearch.length > 0) {
        filteredProducts = filteredProducts.filter((product) => {
            const isMatchCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category.id);
            const isMatchName = trimmedSearch.length === 0 || product.title.toLowerCase().includes(trimmedSearch.toLowerCase());
            return isMatchCategory && isMatchName;
        });
    }

    if (sortType) {
        const sortPredicate = PRODUCTS_SORTING[sortType].predicate;
        filteredProducts.sort(sortPredicate);
    }

    return filteredProducts;
};
