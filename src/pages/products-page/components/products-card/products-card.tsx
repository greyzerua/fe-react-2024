import type { MouseEvent } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';

import { EIconType, Icon } from '@/components/icons';
import { ICON_COLORS } from '@/components/icons/constants';
import { APP_LINK_URLS, EAppPage } from '@/constants/link-urls';
import { useAddToCart } from '@/hooks/useAddToCart';
import type { Product } from '@/interfaces/product';

import styles from './products-card.module.css';

interface Props {
    product: Product;
}

export const ProductsCard = ({ product }: Props) => {
    const { images, title, price, id } = product;

    const navigate = useNavigate();

    const { productCount, addSelectedProduct } = useAddToCart(id);

    const addToCard = (event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        addSelectedProduct();
    };

    const goToProduct = () => {
        navigate(generatePath(APP_LINK_URLS[EAppPage.PRODUCT], { id }));
    };

    return (
        <div className={styles['products__card']} onClick={goToProduct}>
            <div className={styles['products__card__img-wrapper']}>
                <img className={styles['products__card__img']} src={images[0]} alt={title} />
            </div>
            <h2 className={styles['products__card__title']}>{title}</h2>
            <div className={styles['products__card__info']}>
                <p className={styles['products__card__info-price']}>
                    {price}
                    <span className={styles['products__card__info-currency']}>₴</span>
                </p>
                <button className={styles['products__card__add-btn']} onClick={addToCard}>
                    <Icon iconType={EIconType.BASKET} stroke={ICON_COLORS.BLACK} />
                    {productCount ? <span className={styles['products__card__count']}>{productCount}</span> : null}
                </button>
            </div>
        </div>
    );
};
