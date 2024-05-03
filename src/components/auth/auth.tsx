import { EAppPage } from '../../constants/link-urls';
import { AppLink } from '../app-link';
import { EIconType, Icon } from '../icons';

import styles from './auth.module.css';

interface Props {
    onPageChange: (page: EAppPage) => void;
    currentPage: EAppPage;
}

export const Auth = ({ onPageChange, currentPage }: Props) => (
    <div className={styles['auth-buttons']}>
        <AppLink
            page={EAppPage.LOGIN}
            currentPage={currentPage}
            onPageChange={onPageChange}
            className={`${styles['auth-buttons__button']} ${styles['auth-buttons__button_login']}`}
        >
            <Icon iconType={EIconType.LOGIN} />
            Login
        </AppLink>
        <AppLink
            page={EAppPage.SIGNUP}
            currentPage={currentPage}
            onPageChange={onPageChange}
            className={`${styles['auth-buttons__button']} ${styles['auth-buttons__button_sign-up']}`}
        >
            <Icon iconType={EIconType.USER} />
            Sign up
        </AppLink>
    </div>
);
