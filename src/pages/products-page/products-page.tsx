import { useMemo, useState } from 'react';

import { WidthContainer } from '@/components/width-container';
import type { Category } from '@/interfaces/category';

import type { AddSelectedProduct, SelectedProducts } from '../../types/selected-products';

import ProductCategoryList from './components/products-category-list/products-category-list';
import { ProductsList } from './components/products-list/products-list';
import ProductSearch from './components/products-search/product-search';
import ProductSortDropdown from './components/products-sort-dropdown/products-sort-dropdown';
import { getFilteredProducts } from './utils/get-filtered-products';
import { EProductsSort } from './constants';

import styles from './products-page.module.css';

interface Props {
    addSelectedProduct: AddSelectedProduct;
    selectedProducts: SelectedProducts;
}

export const ProductsPage = ({ selectedProducts, addSelectedProduct }: Props) => {
    const [categories, setCategories] = useState<Array<Category['id']>>([]);
    const [sortType, setSortType] = useState<EProductsSort>(EProductsSort.PRICE_DESC);
    const [searchValue, setSearchValue] = useState<string>('');

    const filteredProducts = useMemo(
        () =>
            getFilteredProducts({
                sortType,
                searchValue,
                selectedCategories: categories,
            }),
        [categories, sortType, searchValue],
    );

    return (
        <section className={styles['products']}>
            <WidthContainer className={styles['products__width-container']}>
                <div className={styles['products__filters-container']}>
                    <ProductSearch onSearchChange={setSearchValue} />
                    <div className={styles['products__filters-left']}>
                        <ProductCategoryList onCategoriesChange={setCategories} />
                        <div className={styles['products__dropdown-wrap']}>
                            <p className={styles['products__dropdown-text']}>Sort by:</p>
                            <ProductSortDropdown onSortingChange={setSortType} />
                        </div>
                    </div>
                </div>
                <ProductsList products={filteredProducts} addSelectedProduct={addSelectedProduct} selectedProducts={selectedProducts} />
            </WidthContainer>
        </section>
    );
};
