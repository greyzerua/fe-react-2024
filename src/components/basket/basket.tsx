import { APP_LINK_URLS } from '../../link-urls';
import { EIconType, Icon } from '../icons';
import { Link } from '../link';

import styles from './basket.module.css';

export const Basket = () => (
    <Link href={APP_LINK_URLS.SIGN_UP} className={styles['basket']}>
        <Icon iconType={EIconType.BASKET} />
    </Link>
);
