import { useRef, useState } from 'react';

import clsx from 'clsx';

import { EIconType, Icon } from '@/components/icons';
import { ICON_COLORS } from '@/components/icons/constants';
import { WidthContainer } from '@/components/width-container';

import styles from './login-page.module.css';

export const LoginPage = () => {
    const [isShownPassword, setIsShownPassword] = useState<boolean>(false);
    const inputReference = useRef<HTMLInputElement | null>(null);

    const toggleShownPassword = () => {
        setIsShownPassword((previousShown) => !previousShown);
        inputReference.current?.focus();
    };

    return (
        <WidthContainer>
            <section className={styles.login}>
                <form className={styles['login__form']}>
                    <h2 className={styles['login__title']}>Login</h2>
                    <div className={styles['login__form_inner']}>
                        <input type="email" className={styles['login__form_input']} placeholder="Email address" />
                        <div className={styles['login__form_input_wrap']}>
                            <input
                                ref={inputReference}
                                type={isShownPassword ? 'text' : 'password'}
                                className={clsx(styles['login__form_input'], isShownPassword && styles['shown-password'])}
                                placeholder="Password"
                            />
                            <button className={styles['login__form_input_btn']} onClick={toggleShownPassword}>
                                <Icon iconType={isShownPassword ? EIconType.EYE_CROSSED : EIconType.EYE} />
                            </button>
                        </div>
                    </div>

                    <div className={styles['login__auth']}>
                        <button className={`${styles['login__auth_button']} ${styles['login__auth_button-login']}`}>
                            <Icon iconType={EIconType.LOGIN} />
                            Login
                        </button>
                        <button className={`${styles['login__auth_button']} ${styles['login__auth_button-sign-up']}`}>
                            <Icon iconType={EIconType.USER} stroke={ICON_COLORS.BLACK} />
                            Sign up
                        </button>
                    </div>
                </form>
            </section>
        </WidthContainer>
    );
};
