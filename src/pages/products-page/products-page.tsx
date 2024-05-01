import { WidthContainer } from '@/components/width-container';

import { ProductsList } from '../../components/products-list';
import { PRODUCTS } from '../../data/products';

import styles from './products-page.module.css';

export const ProductsPage = () => (
    <section className={styles['products']}>
        <WidthContainer className={styles['products__width-container']}>
            <ProductsList products={PRODUCTS} />
        </WidthContainer>
    </section>
);
