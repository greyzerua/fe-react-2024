import type { FormEvent } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import clsx from 'clsx';

import { AppLink } from '@/components/app-link';
import { EIconType, Icon } from '@/components/icons';
import { ICON_COLORS } from '@/components/icons/constants';
import { WidthContainer } from '@/components/width-container';
import { APP_LINK_URLS, EAppPage } from '@/constants/link-urls';

import { useAuth } from '../../hooks/useAuth';

import styles from './login-page.module.css';

const EMAIL_VALIDATION = {
    required: 'Email is required',
    pattern: {
        value: /[\d%+._a-z-]+@[\d.a-z-]+\.[a-z]{2,4}$/,
        message: 'Email is invalid',
    },
};

const AUTH_ERROR = { type: 'auth_error', message: 'Unable to authorize' };

interface FormData {
    email: string;
    password: string;
}

export const LoginPage = () => {
    const [isShownPassword, setIsShownPassword] = useState<boolean>(false);

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        setFocus,
        setError,
        formState: { errors, isValid },
    } = useForm<FormData>({
        mode: 'onChange',
        shouldFocusError: false,
    });

    const { onLogin } = useAuth();

    const emailError = errors.email?.message;
    const passwordError = errors.password?.message;

    const onSubmit = async (data: FormData) => {
        const loginResult = await onLogin(data);
        if (loginResult?.isAuthorized) {
            navigate(APP_LINK_URLS[EAppPage.ROOT]);
            return;
        }
        setError('email', AUTH_ERROR);
        setError('password', AUTH_ERROR);
    };

    const onLoginSubmit = (event: FormEvent) => {
        handleSubmit(onSubmit)(event);
    };

    const toggleShownPassword = () => {
        setIsShownPassword((previousShown) => !previousShown);
        setFocus('password');
    };

    const passwordClass = clsx(
        styles['login__form_input'],
        styles['login__form_input_password'],
        isShownPassword && styles['shown-password'],
        passwordError && styles['login__form_input-error'],
    );

    return (
        <WidthContainer>
            <section className={styles.login}>
                <form className={styles['login__form']} onSubmit={onLoginSubmit}>
                    <h2 className={styles['login__title']}>Login</h2>
                    <div className={styles['login__form_inner']}>
                        <input
                            {...register('email', EMAIL_VALIDATION)}
                            type="text"
                            className={clsx(styles['login__form_input'], emailError && styles['login__form_input-error'])}
                            placeholder="Email address"
                        />
                        {emailError && <span className={styles['login__form_error-text']}>{emailError}</span>}

                        <div className={styles['login__form_input_wrap']}>
                            <input
                                {...register('password', { required: 'Password is required' })}
                                type={isShownPassword ? 'text' : 'password'}
                                className={passwordClass}
                                placeholder="Password"
                            />
                            <button type="button" className={styles['login__form_input_btn']} onClick={toggleShownPassword}>
                                <Icon iconType={isShownPassword ? EIconType.EYE_CROSSED : EIconType.EYE} />
                            </button>
                        </div>
                        {passwordError && <span className={styles['login__form_error-text']}>{passwordError}</span>}
                    </div>

                    <div className={styles['login__auth']}>
                        <button
                            type="submit"
                            className={`${styles['login__auth_button']} ${styles['login__auth_button-login']}`}
                            disabled={!isValid}
                        >
                            <Icon iconType={EIconType.LOGIN} stroke={isValid ? ICON_COLORS.DEFAULT : ICON_COLORS.DISABLED} />
                            Login
                        </button>
                        <AppLink
                            page={EAppPage.SIGNUP}
                            className={`${styles['login__auth_button']} ${styles['login__auth_button-sign-up']}`}
                        >
                            <Icon iconType={EIconType.USER} />
                            Sign up
                        </AppLink>
                    </div>
                </form>
            </section>
        </WidthContainer>
    );
};
