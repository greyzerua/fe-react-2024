import { useAuth } from '@/hooks/useAuth';

import { EAppPage } from '../../constants/link-urls';
import { AppLink } from '../app-link';
import { EIconType, Icon } from '../icons';

import styles from './auth-buttons.module.css';

const BUTTON_CLASSNAME = styles['auth-buttons__button'];

export const AuthButtons = () => {
    const { isAuthorized, onLogout } = useAuth();

    return (
        <div className={styles['auth-buttons']}>
            {isAuthorized ? (
                <button onClick={onLogout} className={`${BUTTON_CLASSNAME} ${styles['auth-buttons__button_logout']}`}>
                    <Icon iconType={EIconType.LOGOUT} />
                    Logout
                </button>
            ) : (
                <AppLink page={EAppPage.LOGIN} className={`${BUTTON_CLASSNAME} ${styles['auth-buttons__button_login']}`}>
                    <Icon iconType={EIconType.LOGIN} />
                    Login
                </AppLink>
            )}
            <AppLink page={EAppPage.SIGNUP} className={`${BUTTON_CLASSNAME} ${styles['auth-buttons__button_sign-up']}`}>
                <Icon iconType={EIconType.USER} />
                Sign up
            </AppLink>
        </div>
    );
};
