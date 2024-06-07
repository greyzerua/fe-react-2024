import { WidthContainer } from '@/components/width-container';
import { PRODUCTS } from '@/data/products';

import styles from './product-page.module.css';

const product = PRODUCTS[0];

export const ProductPage = () => (
    <WidthContainer>
        <section className={styles['product-page']}>
            <div className={styles['product-page__info']}>
                <h2 className={styles['product-page__info-title']}>{product.title}</h2>
                <span className={styles['product-page__info-category']}>{product.category.name}</span>
                <p className={styles['product-page__info-desc']}>{product.description}</p>
                <div className={styles['product-page__price-box']}>
                    <p className={styles['product-page__price']}>
                        {product.price}
                        <span className={styles['product-page__price-currency']}>₴</span>
                    </p>
                    <button className={styles['product-page__price-btn']}>Add to cart</button>
                </div>
            </div>
        </section>
    </WidthContainer>
);
