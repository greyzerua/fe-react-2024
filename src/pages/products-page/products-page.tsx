import { ToastContainer } from 'react-toastify';

import { WidthContainer } from '@/components/width-container';

import ProductCategoryList from './components/products-category-list/products-category-list';
import { ProductsList } from './components/products-list/products-list';
import { ProductPagination } from './components/products-pagination/product-pagination';
import ProductSearch from './components/products-search/product-search';
import ProductSortDropdown from './components/products-sort-dropdown/products-sort-dropdown';
import { useGetProducts } from './hooks/useGetProducts';
import { DEFAULT_PAGE_SIZE } from './constants';

import 'react-toastify/ReactToastify.css';
import styles from './products-page.module.css';

export const ProductsPage = () => {
    const { setCategories, setSortType, setSearchValue, setCurrentPage, data, totalCount, currentPage } = useGetProducts();

    return (
        <section className={styles['products']}>
            <WidthContainer className={styles['products__width-container']}>
                <ToastContainer />
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
                <ProductsList products={data} />
                {totalCount ? (
                    <ProductPagination
                        totalCount={totalCount}
                        pageSize={DEFAULT_PAGE_SIZE}
                        currentPage={currentPage}
                        onPageChange={setCurrentPage}
                    />
                ) : null}
            </WidthContainer>
        </section>
    );
};
