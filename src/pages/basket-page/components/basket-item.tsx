import { useEffect, useState } from 'react';

import { EIconType, Icon } from '@/components/icons';
import { ICON_COLORS } from '@/components/icons/constants';
import type { SelectedProduct } from '@/interfaces/selected-product';

import type { DeleteSelectedProduct, UpdateSelectedProductCount } from '../typedef';

import styles from './basket-item.module.css';

interface Props {
    product: SelectedProduct;
    updateProductCount: UpdateSelectedProductCount;
    deleteSelectedProduct: DeleteSelectedProduct;
}

export const BasketItem = ({ product, updateProductCount, deleteSelectedProduct }: Props) => {
    const { productId, image, title, price } = product;

    const [count, setCount] = useState<number>(product.count);

    useEffect(() => {
        updateProductCount(productId, count);
    }, [count, productId, updateProductCount]);

    const incrementCount = () => {
        setCount((previousCount) => ++previousCount);
    };

    const decrementCount = () => {
        setCount((previousCount) => --previousCount);
    };

    const deleteItem = () => {
        deleteSelectedProduct(productId);
    };

    return (
        <div className={styles['basket__product']}>
            <div className={styles['basket__product_details']}>
                <div className={styles['basket__product__img-wrap']}>
                    <img src={image} className={styles['basket__product__img']} alt="" />
                </div>
                <div className={styles['basket__product_info']}>
                    <p className={styles['basket__product_details-name']}>{title}</p>
                    <p className={styles['basket__price']}>
                        {price}
                        <span className={styles['basket__currency']}>₴</span>
                    </p>
                </div>
            </div>
            <div className={styles['basket__product_item']}>
                <div className={styles['basket__product_quantity_wrap']}>
                    <button className={styles['basket__product_btn']} onClick={decrementCount} disabled={count <= 1}>
                        <Icon iconType={EIconType.MINUS} stroke={ICON_COLORS.DISABLED} />
                    </button>
                    <span className={styles['basket__product_quantity-value']}>{count}</span>
                    <button className={styles['basket__product_btn']} onClick={incrementCount}>
                        <Icon iconType={EIconType.PLUS} stroke={ICON_COLORS.DISABLED} />
                    </button>
                </div>
                <div className={styles['basket__product_price_wrap']}>
                    <p className={`${styles['basket__product_price']} ${styles['basket__price']}`}>
                        {count * price}
                        <span className={styles['basket__currency']}>₴</span>
                    </p>
                    <button className={`${styles['basket__product_btn']} ${styles['basket__product_btn-trash']}`} onClick={deleteItem}>
                        <Icon iconType={EIconType.TRASH_ICON} stroke={ICON_COLORS.DISABLED} />
                    </button>
                </div>
            </div>
        </div>
    );
};
