import { WidthContainer } from '@/components/width-container';

import { PRODUCTS } from '../../data/products';
import type { AddSelectedProduct, SelectedProducts } from '../../types/selected-products';

import { ProductsList } from './components/products-list/products-list';

import styles from './products-page.module.css';

interface Props {
    addSelectedProduct: AddSelectedProduct;
    selectedProducts: SelectedProducts;
}

export const ProductsPage = ({ selectedProducts, addSelectedProduct }: Props) => (
    <section className={styles['products']}>
        <WidthContainer className={styles['products__width-container']}>
            <ProductsList products={PRODUCTS} addSelectedProduct={addSelectedProduct} selectedProducts={selectedProducts} />
        </WidthContainer>
    </section>
);
