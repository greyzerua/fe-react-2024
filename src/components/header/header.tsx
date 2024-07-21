import { useContext } from 'react';

import headerLogo from '@/assets/logo.svg';
import { BurgerContext } from '@/contexts/burger-context';

import { EAppPage } from '../../constants/link-urls';
import { AppLink } from '../app-link';
import { AuthButtons } from '../auth-buttons';
import { Basket } from '../basket';
import { Burger } from '../burger';
import { ThemeSwitcher } from '../theme-switcher';
import { WidthContainer } from '../width-container';

import styles from './header.module.css';

export const HeaderComponent = () => {
    const { closeBurger } = useContext(BurgerContext);

    return (
        <header className={styles.header}>
            <WidthContainer>
                <div className={styles['header__container']}>
                    <div className={styles['header__inner_left']}>
                        <AppLink page={EAppPage.ROOT} className={styles['header__logo']} onClick={closeBurger}>
                            <img src={headerLogo} alt="logo" />
                        </AppLink>
                        <ThemeSwitcher className={styles['header__theme-switcher']} />
                    </div>

                    <div className={styles['header__inner_right']}>
                        <nav>
                            <ul className={styles['header__nav-list']}>
                                <li>
                                    <AppLink page={EAppPage.ROOT} className={styles['header__nav-link']} dataHover="About">
                                        <span>About</span>
                                    </AppLink>
                                </li>
                                <li>
                                    <AppLink page={EAppPage.PRODUCTS} className={styles['header__nav-link']} dataHover="Products">
                                        <span>Products</span>
                                    </AppLink>
                                </li>
                            </ul>
                        </nav>
                        <div className={styles['header__basket']} onClick={closeBurger}>
                            <Basket />
                        </div>
                        <div className={styles['header__burger']}>
                            <Burger />
                        </div>
                        <div className={styles['header__auth']}>
                            <AuthButtons />
                        </div>
                    </div>
                </div>
            </WidthContainer>
        </header>
    );
};
