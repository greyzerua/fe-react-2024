import { useContext } from 'react';

import { CartCountContext } from '@/contexts/cart-count-context';

import { EAppPage } from '../../constants/link-urls';
import { AppLink } from '../app-link';
import { EIconType, Icon } from '../icons';

import styles from './basket.module.css';

export const Basket = () => {
    const { count } = useContext(CartCountContext);

    return (
        <AppLink page={EAppPage.BASKET} className={styles['basket']}>
            <Icon iconType={EIconType.BASKET} />
            {!!count && <span className={styles['basket__count']}>{count}</span>}
        </AppLink>
    );
};
