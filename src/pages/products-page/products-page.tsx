import InfiniteScroll from 'react-infinite-scroll-component';

import { EIconType, Icon } from '@/components/icons';
import { WidthContainer } from '@/components/width-container';

import ProductCategoryList from './components/products-category-list/products-category-list';
import { ProductsList } from './components/products-list/products-list';
import { ProductPagination } from './components/products-pagination/product-pagination';
import ProductSearch from './components/products-search/product-search';
import ProductSortDropdown from './components/products-sort-dropdown/products-sort-dropdown';
import { useGetProducts } from './hooks/useGetProducts';
import { DEFAULT_PAGE_SIZE } from './constants';

import styles from './products-page.module.css';

export const ProductsPage = () => {
    const { setCategories, setSortType, setSearchValue, setCurrentPage, loadMore, data, totalCount, currentPage, isLoading, isInfinite } =
        useGetProducts();

    const renderProducts = () => {
        if (isInfinite) {
            return (
                <InfiniteScroll
                    dataLength={data.length}
                    next={loadMore}
                    hasMore={totalCount === null ? true : data.length < totalCount}
                    loader={<Icon iconType={EIconType.LOADING} width={70} height={70} className={styles['products__loading']} />}
                >
                    <ProductsList products={data} />
                </InfiniteScroll>
            );
        }
        if (isLoading) {
            return <Icon iconType={EIconType.LOADING} className={styles['products__loading']} />;
        }
        if (data.length === 0) {
            return <h3 className={styles['products__message']}>No products found</h3>;
        }
        return (
            <>
                <ProductsList products={data} />
                {totalCount ? (
                    <ProductPagination
                        totalCount={totalCount}
                        pageSize={DEFAULT_PAGE_SIZE}
                        currentPage={currentPage}
                        onPageChange={setCurrentPage}
                    />
                ) : null}
            </>
        );
    };

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
                <div className={styles['products__list-container']}>{renderProducts()}</div>
            </WidthContainer>
        </section>
    );
};
