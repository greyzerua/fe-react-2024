import type { Product } from '../..//interfaces/product';
import { EIconType, Icon } from '../icons';
import { ICON_COLORS } from '../icons/constants';

import styles from './products-card.module.css';

interface Props {
    product: Product;
}

export const ProductsCard = ({ product }: Props) => {
    const { images, title, price } = product;

    return (
        <div className={styles['products__card']}>
            <div className={styles['products__card__img-wrapper']}>
                <img className={styles['products__card__img']} src={images[0]} alt={title} />
            </div>
            <h2 className={styles['products__card__title']}>{title}</h2>
            <div className={styles['products__card__info']}>
                <p className={styles['products__card__info-price']}>
                    {price}
                    <span className={styles['products__card__info-currency']}>₴</span>
                </p>
                <button className={styles['products__card__info-btn']}>
                    <Icon iconType={EIconType.BASKET} stroke={ICON_COLORS.BLACK} />
                </button>
            </div>
        </div>
    );
};
