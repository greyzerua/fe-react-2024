import { useContext } from 'react';

import clsx from 'clsx';

import { EAppPage } from '@/constants/link-urls';
import { BurgerContext } from '@/contexts/burger-context';

import { AppLink } from '../app-link';
import { Footer } from '../footer';
import { ThemeSwitcher } from '../theme-switcher';

import styles from './burger.module.css';

export const Burger = () => {
    const { isShown: isOpen, toggleBurger } = useContext(BurgerContext);

    const handleToggleMenu = () => {
        document.body.style.overflow = isOpen ? '' : 'hidden';

        toggleBurger();
    };

    return (
        <div className={styles.burger}>
            <button onClick={handleToggleMenu} className={clsx(styles['burger__btn'], isOpen && styles['burger_active'])}>
                <span className={styles['burger__line']}></span>
                <span className={styles['burger__line']}></span>
            </button>
            <div className={clsx(styles['menu'], isOpen && styles['menu_active'])}>
                <div className={styles['menu__wrap']}>
                    <nav>
                        <ul className={styles['menu__list']}>
                            <li>
                                <AppLink page={EAppPage.ROOT} className={styles['menu__link']} onClick={handleToggleMenu}>
                                    <span>About</span>
                                </AppLink>
                            </li>
                            <li>
                                <AppLink page={EAppPage.PRODUCTS} className={styles['menu__link']} onClick={handleToggleMenu}>
                                    <span>Products</span>
                                </AppLink>
                            </li>
                            <li>
                                <AppLink page={EAppPage.LOGIN} className={styles['menu__link']} onClick={handleToggleMenu}>
                                    <span>Login</span>
                                </AppLink>
                            </li>
                            <li>
                                <AppLink page={EAppPage.SIGNUP} className={styles['menu__link']} onClick={handleToggleMenu}>
                                    <span>Sign up</span>
                                </AppLink>
                            </li>
                            <li className={styles['menu__link']}>
                                <ThemeSwitcher />
                            </li>
                        </ul>
                    </nav>
                </div>

                <Footer />
            </div>
        </div>
    );
};
