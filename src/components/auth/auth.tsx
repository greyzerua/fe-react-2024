import login from '@/assets/Login.svg';
import signUp from '@/assets/user.svg';

import styles from './auth.module.css';

export const Auth = () => (
    <div className={styles['auth-buttons']}>
        <a href="/login" className={`${styles['auth-buttons__button']} ${styles['auth-buttons__button_login']}`}>
            <img src={login} alt="" />
            Login
        </a>
        <a href="/sign-up" className={`${styles['auth-buttons__button']} ${styles['auth-buttons__button_sign-up']}`}>
            <img src={signUp} alt="" />
            Sign up
        </a>
    </div>
);
