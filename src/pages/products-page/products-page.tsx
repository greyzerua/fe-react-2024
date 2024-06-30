import InfiniteScroll from 'react-infinite-scroll-component';

import { EIconType, Icon } from '@/components/icons';
import { WidthContainer } from '@/components/width-container';

import ProductCategoryList from './components/products-category-list/products-category-list';
import { ProductsList } from './components/products-list/products-list';
import { ProductPagination } from './components/products-pagination/product-pagination';
import ProductSearch from './components/products-search/product-search';
import ProductSortDropdown from './components/products-sort-dropdown/products-sort-dropdown';
import { useGetCategories } from './hooks/useGetCategories';
import { useGetProducts } from './hooks/useGetProducts';
import { DEFAULT_PAGE_SIZE } from './constants';

import styles from './products-page.module.css';

export const ProductsPage = () => {
    const { categories } = useGetCategories();
    const {
        setCategories,
        setSortType,
        setSearchValue,
        setCurrentPage,
        loadMore,
        data,
        totalCount,
        filteredTotalCount,
        paginationTotalCount,
        currentPage,
        isLoading,
        isInfinite,
    } = useGetProducts();

    const renderProducts = () => {
        if (isInfinite) {
            return (
                <InfiniteScroll
                    dataLength={data.length}
                    next={loadMore}
                    hasMore={paginationTotalCount === null ? true : data.length < paginationTotalCount}
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
                {paginationTotalCount ? (
                    <ProductPagination
                        totalCount={paginationTotalCount}
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
                        <ProductCategoryList categories={categories} onCategoriesChange={setCategories} />
                        <div className={styles['products__dropdown-wrap']}>
                            <p className={styles['products__dropdown-text']}>Sort by:</p>
                            <ProductSortDropdown onSortingChange={setSortType} />
                        </div>
                    </div>
                </div>
                <div className={styles['products__counts']}>
                    <span className={styles['products__count']}>Total amount of products: {totalCount}</span>
                    {filteredTotalCount && (
                        <span className={styles['products__count']}>Filtered amount of products: {filteredTotalCount}</span>
                    )}
                </div>
                <div className={styles['products__list-container']}>{renderProducts()}</div>
            </WidthContainer>
        </section>
    );
};
