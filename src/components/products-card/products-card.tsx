import type { Product } from '../../interfaces/product';
import type { SelectedProduct } from '../../interfaces/selected-product';
import type { AddSelectedProduct } from '../../types/selected-products';
import { EIconType, Icon } from '../icons';
import { ICON_COLORS } from '../icons/constants';

import styles from './products-card.module.css';

interface Props {
    product: Product;
    addSelectedProduct: AddSelectedProduct;
    selectedProduct: SelectedProduct;
}

export const ProductsCard = ({ product, addSelectedProduct, selectedProduct }: Props) => {
    const { images, title, price, id } = product;

    const addToCard = () => {
        addSelectedProduct(id);
    };

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
                <button className={styles['products__card__add-btn']} onClick={addToCard}>
                    <Icon iconType={EIconType.BASKET} stroke={ICON_COLORS.BLACK} />
                    {selectedProduct?.count && <span className={styles['products__card__count']}>{selectedProduct?.count}</span>}
                </button>
            </div>
        </div>
    );
};
