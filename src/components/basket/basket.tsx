import { Icon, IconType } from '../icons';
import { Link } from '../link';

import styles from './basket.module.css';

export const Basket = () => (
    <Link href="/basket" className={styles['basket']}>
        <Icon iconType={IconType.BASKET} />
    </Link>
);
