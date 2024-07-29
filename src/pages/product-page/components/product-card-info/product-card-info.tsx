import { BackButton } from '@/components/back-button/back-button';
import { EIconType, Icon } from '@/components/icons';
import { useAddToCart } from '@/hooks/useAddToCart';
import type { Product } from '@/interfaces/product';

import { ProductSlider } from '../product-slider/product-slider';

import styles from './product-card-info.module.css';

interface Props {
    product: Product;
}

export const ProductCardInfo = ({ product }: Props) => {
    const { productCount, addSelectedProduct } = useAddToCart(product);

    const addProduct = () => {
        addSelectedProduct();
    };

    return (
        <div className={styles['product-page__wrapper']}>
            <ProductSlider images={product.images} />
            <div className={styles['product-page__info']}>
                <p className={styles['price-mobile']}>
                    {product.price}
                    <span className={styles['price-mobile__currency']}>₴</span>
                </p>
                <h2 className={styles['product-page__info-title']}>{product.title}</h2>
                <span className={styles['product-page__info-category']}>{product.category.name}</span>
                <p className={styles['product-page__info-desc']}>{product.description}</p>
                <div className={styles['product-page__price-box']}>
                    <p className={styles['product-page__price']}>
                        {product.price}
                        <span className={styles['product-page__price-currency']}>₴</span>
                    </p>
                    <BackButton className={styles['product-page__back']} />
                    <button className={styles['product-page__add-btn']} onClick={addProduct}>
                        <Icon iconType={EIconType.BASKET} />
                        Add to cart ({productCount})
                    </button>
                </div>
            </div>
        </div>
    );
};
