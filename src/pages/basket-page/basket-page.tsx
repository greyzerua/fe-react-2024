import { useNavigate } from 'react-router-dom';

import { Icon } from '@/components/icons';
import { EIconType, ICON_COLORS } from '@/components/icons/constants';
import { WidthContainer } from '@/components/width-container';
import { APP_LINK_URLS, EAppPage } from '@/constants/link-urls';

import { BasketItem } from './components/basket-item';
import { useBasketProducts } from './hooks/useBasketProducts';

import styles from './basket-page.module.css';

export const BasketPage = () => {
    const { selectedProducts, totalPrice, updateProductCount, deleteSelectedProduct } = useBasketProducts();
    const navigate = useNavigate();

    return (
        <WidthContainer>
            <section className={styles.basket}>
                <div className={styles['basket__wrap']}>
                    <button className={styles['basket__close-btn']} onClick={() => navigate(-1)}>
                        <Icon iconType={EIconType.CLOSE} />
                    </button>
                    <h2 className={styles['basket__title']}>Cart ({selectedProducts.length})</h2>
                    {selectedProducts.length > 0 ? (
                        <div className={styles['basket__products']}>
                            {selectedProducts.map((product) => (
                                <BasketItem
                                    product={product}
                                    deleteSelectedProduct={deleteSelectedProduct}
                                    updateProductCount={updateProductCount}
                                    key={product.productId}
                                />
                            ))}
                        </div>
                    ) : (
                        <p className={styles['no-result-message']}>You have not added any products to the cart yet.</p>
                    )}

                    <div className={styles['basket__summary']}>
                        <button
                            className={`${styles['basket__summary-btn']} ${styles['basket__btn']}`}
                            onClick={() => navigate(APP_LINK_URLS[EAppPage.PRODUCTS])}
                        >
                            <Icon iconType={EIconType.ARROW_LEFT} stroke={ICON_COLORS.BLACK} />
                            Continue shopping
                        </button>
                        {selectedProducts.length > 0 && (
                            <div className={styles['basket__purchase']}>
                                <p className={styles['basket__purchase-total']}>
                                    Total:
                                    <span className={styles['basket__purchase-total-price']}>
                                        {totalPrice}
                                        <span className={styles['basket__currency']}>₴</span>
                                    </span>
                                </p>
                                <button
                                    className={`${styles['basket__purchase-btn']} ${styles['basket__btn']}`}
                                    onClick={() => navigate(APP_LINK_URLS[EAppPage.ORDER])}
                                >
                                    <Icon iconType={EIconType.WALLET} />
                                    Buy
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </WidthContainer>
    );
};
