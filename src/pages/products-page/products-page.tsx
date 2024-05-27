import { WidthContainer } from '@/components/width-container';

import { PRODUCTS } from '../../data/products';
import type { AddSelectedProduct, SelectedProducts } from '../../types/selected-products';

import ProductCategoryList from './components/products-category-list/products-category-list';
import { ProductsList } from './components/products-list/products-list';
import ProductSearch from './components/products-search/product-search';
import ProductSortDropdown from './components/products-sort-dropdown/products-sort-dropdown';

import styles from './products-page.module.css';

interface Props {
    addSelectedProduct: AddSelectedProduct;
    selectedProducts: SelectedProducts;
}

export const ProductsPage = ({ selectedProducts, addSelectedProduct }: Props) => (
    <section className={styles['products']}>
        <WidthContainer className={styles['products__width-container']}>
            <div className={styles['products__filters-container']}>
                <ProductSearch />
                <div className={styles['products__filters-left']}>
                    <ProductCategoryList />
                    <div className={styles['products__dropdown-wrap']}>
                        <p className={styles['products__dropdown-text']}>Sort by:</p>
                        <ProductSortDropdown />
                    </div>
                </div>
            </div>
            <ProductsList products={PRODUCTS} addSelectedProduct={addSelectedProduct} selectedProducts={selectedProducts} />
        </WidthContainer>
    </section>
);
