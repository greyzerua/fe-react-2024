import { BackButton } from '@/components/back-button/back-button';
import { EIconType, Icon } from '@/components/icons';
import { WidthContainer } from '@/components/width-container';
import { PRODUCTS } from '@/data/products';

import { ProductSlider } from './components/product-slider/product-slider';

import styles from './product-page.module.css';

const product = PRODUCTS[10];

export const ProductPage = () => (
    <WidthContainer>
        <section className={styles['product-page']}>
            <div className={styles['product-page__wrapper']}>
                <BackButton className={styles['product-page__back']} />
                <ProductSlider images={product.images} />
                <div className={styles['product-page__info']}>
                    <h2 className={styles['product-page__info-title']}>{product.title}</h2>
                    <span className={styles['product-page__info-category']}>{product.category.name}</span>
                    <p className={styles['product-page__info-desc']}>{product.description}</p>
                    <div className={styles['product-page__price-box']}>
                        <p className={styles['product-page__price']}>
                            {product.price}
                            <span className={styles['product-page__price-currency']}>₴</span>
                        </p>
                        <button className={styles['product-page__add-btn']}>
                            <Icon iconType={EIconType.BASKET} />
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </WidthContainer>
);
