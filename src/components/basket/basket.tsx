import { EAppPage } from '../../link-urls';
import { AppLink } from '../app-link';
import { EIconType, Icon } from '../icons';

import styles from './basket.module.css';

interface Props {
    onPageChange: (page: EAppPage) => void;
    currentPage: EAppPage;
}

export const Basket = ({ currentPage, onPageChange }: Props) => (
    <AppLink onPageChange={onPageChange} currentPage={currentPage} page={EAppPage.BASKET} className={styles['basket']}>
        <Icon iconType={EIconType.BASKET} />
    </AppLink>
);
