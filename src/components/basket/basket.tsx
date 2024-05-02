import { EAppPage } from '../../link-urls';
import type { SelectedProducts } from '../../types/selected-products';
import { AppLink } from '../app-link';
import { EIconType, Icon } from '../icons';

import styles from './basket.module.css';

interface Props {
    onPageChange: (page: EAppPage) => void;
    currentPage: EAppPage;
    selectedProducts: SelectedProducts;
}

export const Basket = ({ currentPage, onPageChange, selectedProducts }: Props) => {
    const totalCount = Object.values(selectedProducts).reduce((accumulator, item) => accumulator + item.count, 0);

    return (
        <AppLink onPageChange={onPageChange} currentPage={currentPage} page={EAppPage.BASKET} className={styles['basket']}>
            <Icon iconType={EIconType.BASKET} />
            {!!totalCount && <span className={styles['basket__count']}>{totalCount}</span>}
        </AppLink>
    );
};
