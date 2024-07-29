import { useAuth } from '@/hooks/useAuth';

import { EAppPage } from '../../constants/link-urls';
import { AppLink } from '../app-link';
import { EIconType, Icon } from '../icons';

import styles from './auth-buttons.module.css';

export const AuthButtons = () => {
    const { isAuthorized, onLogout } = useAuth();

    return (
        <div className={styles['container']}>
            {isAuthorized ? (
                <button onClick={onLogout} className={`${styles.button} ${styles.logout}`}>
                    <Icon iconType={EIconType.LOGOUT} />
                    Logout
                </button>
            ) : (
                <AppLink page={EAppPage.LOGIN} className={`${styles.button} ${styles.logout}`}>
                    <Icon iconType={EIconType.LOGIN} />
                    Login
                </AppLink>
            )}
            <AppLink page={EAppPage.SIGNUP} className={`${styles.button} ${styles['sign-up']}`}>
                <Icon iconType={EIconType.USER} />
                Sign up
            </AppLink>
        </div>
    );
};
