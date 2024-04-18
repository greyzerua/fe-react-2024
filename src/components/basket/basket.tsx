import basket from '@/assets/cart.svg';

import styles from './basket.module.css';

export const Basket = () => (
    <a href="/basket" className={styles['basket']}>
        <img src={basket} alt="" />
    </a>
);
