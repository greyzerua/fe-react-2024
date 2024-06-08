import headerLogo from '@/assets/logo.svg';

import { EAppPage } from '../../constants/link-urls';
import { AppLink } from '../app-link';
import { Auth } from '../auth';
import { Basket } from '../basket';
import { Burger } from '../burger';
import { ThemeSwitcher } from '../theme-switcher';
import { WidthContainer } from '../width-container';

import styles from './header.module.css';

export const HeaderComponent = () => (
    <header className={styles.header}>
        <WidthContainer>
            <div className={styles['header__container']}>
                <div className={styles['header__inner_left']}>
                    <AppLink page={EAppPage.ROOT} className={styles['header__logo']}>
                        <img src={headerLogo} alt="logo" />
                    </AppLink>
                    <ThemeSwitcher />
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
                    <div className={styles['header__basket']}>
                        <Basket />
                    </div>
                    <div className={styles['header__burger']}>
                        <Burger />
                    </div>
                    <div className={styles['header__auth']}>
                        <Auth />
                    </div>
                </div>
            </div>
        </WidthContainer>
    </header>
);
