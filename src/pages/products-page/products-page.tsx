import { WidthContainer } from '@/components/width-container';

import { ProductsList } from '../../components/products-list';
import { PRODUCTS } from '../../data/products';
import type { AddSelectedProduct, SelectedProducts } from '../../types/selected-products';

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
