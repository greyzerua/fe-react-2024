import { useEffect, useMemo, useState } from 'react';

import { WidthContainer } from '@/components/width-container';
import type { Category } from '@/interfaces/category';
import type { Product } from '@/interfaces/product';

import ProductCategoryList from './components/products-category-list/products-category-list';
import { ProductsList } from './components/products-list/products-list';
import { ProductPagination } from './components/products-pagination/product-pagination';
import ProductSearch from './components/products-search/product-search';
import ProductSortDropdown from './components/products-sort-dropdown/products-sort-dropdown';
import { getFilteredProducts } from './utils/get-filtered-products';
import { getPaginatedProducts } from './utils/get-paginated-products';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE, EProductsSort } from './constants';

import styles from './products-page.module.css';

export const ProductsPage = () => {
    const [categories, setCategories] = useState<Array<Category['id']>>([]);
    const [sortType, setSortType] = useState<EProductsSort>(EProductsSort.PRICE_DESC);
    const [searchValue, setSearchValue] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(DEFAULT_PAGE);

    const [filteredProducts, setFilteredProducts] = useState<Array<Product>>([]);

    useEffect(() => {
        setFilteredProducts(
            getFilteredProducts({
                sortType,
                searchValue,
                selectedCategories: categories,
            }),
        );
        setCurrentPage(DEFAULT_PAGE);
    }, [categories, sortType, searchValue]);

    const paginatedProducts = useMemo(
        () =>
            getPaginatedProducts({
                products: filteredProducts,
                currentPage,
            }),
        [filteredProducts, currentPage],
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
                <ProductsList products={paginatedProducts} />
                <ProductPagination
                    totalCount={filteredProducts.length}
                    pageSize={DEFAULT_PAGE_SIZE}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                />
            </WidthContainer>
        </section>
    );
};
