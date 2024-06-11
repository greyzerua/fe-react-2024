import { EAppPage } from '../../constants/link-urls';
import { AppLink } from '../app-link';
import { EIconType, Icon } from '../icons';

import styles from './auth.module.css';

export const Auth = () => (
    <div className={styles['auth-buttons']}>
        <AppLink page={EAppPage.LOGIN} className={`${styles['auth-buttons__button']} ${styles['auth-buttons__button_login']}`}>
            <Icon iconType={EIconType.LOGIN} />
            Login
        </AppLink>
        <AppLink page={EAppPage.SIGNUP} className={`${styles['auth-buttons__button']} ${styles['auth-buttons__button_sign-up']}`}>
            <Icon iconType={EIconType.USER} />
            Sign up
        </AppLink>
    </div>
);
