import { APP_LINK_URLS } from '../../link-urls';
import { EIconType, Icon } from '../icons';
import { Link } from '../link';

import styles from './auth.module.css';

export const Auth = () => (
    <div className={styles['auth-buttons']}>
        <Link href={APP_LINK_URLS.LOGIN} className={`${styles['auth-buttons__button']} ${styles['auth-buttons__button_login']}`}>
            <Icon iconType={EIconType.LOGIN} />
            Login
        </Link>
        <Link href={APP_LINK_URLS.SIGN_UP} className={`${styles['auth-buttons__button']} ${styles['auth-buttons__button_sign-up']}`}>
            <Icon iconType={EIconType.USER} />
            Sign up
        </Link>
    </div>
);
