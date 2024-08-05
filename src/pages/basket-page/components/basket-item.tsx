import { useEffect, useState } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';

import { EIconType, Icon } from '@/components/icons';
import { ICON_COLORS } from '@/components/icons/constants';
import { Link } from '@/components/link/link';
import { APP_LINK_URLS, EAppPage } from '@/constants/link-urls';
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
    const navigate = useNavigate();
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

    const goToProduct = () => {
        navigate(generatePath(APP_LINK_URLS[EAppPage.PRODUCT], { id: productId }));
    };
    return (
        <div className={styles['basket__product']}>
            <div className={styles['basket__product_details']}>
                <Link className={styles['basket__product__img-wrap']} onClick={goToProduct}>
                    <img src={image} className={styles['basket__product__img']} alt="" />
                </Link>
                <Link className={styles['basket__product_info']} onClick={goToProduct}>
                    <p className={styles['basket__product_details-name']}>{title}</p>
                    <p className={styles['basket__price']}>
                        {price}
                        <span className={styles['basket__currency']}>₴</span>
                    </p>
                </Link>
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
