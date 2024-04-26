import { Icon, IconType } from '../icons';
import { Link } from '../link';

import styles from './auth.module.css';

export const Auth = () => (
    <div className={styles['auth-buttons']}>
        <Link href="/login" className={`${styles['auth-buttons__button']} ${styles['auth-buttons__button_login']}`}>
            <Icon iconType={IconType.LOGIN} />
            Login
        </Link>
        <Link href="/sign-up" className={`${styles['auth-buttons__button']} ${styles['auth-buttons__button_sign-up']}`}>
            <Icon iconType={IconType.USER} />
            Sign up
        </Link>
    </div>
);
