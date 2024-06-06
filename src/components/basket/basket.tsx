import { EAppPage } from '../../constants/link-urls';
import type { SelectedProducts } from '../../types/selected-products';
import { AppLink } from '../app-link';
import { EIconType, Icon } from '../icons';

import styles from './basket.module.css';

interface Props {
    selectedProducts: SelectedProducts;
}

export const Basket = ({ selectedProducts }: Props) => {
    const totalCount = Object.values(selectedProducts).reduce((accumulator, item) => accumulator + item.count, 0);

    return (
        <AppLink page={EAppPage.BASKET} className={styles['basket']}>
            <Icon iconType={EIconType.BASKET} />
            {!!totalCount && <span className={styles['basket__count']}>{totalCount}</span>}
        </AppLink>
    );
};
