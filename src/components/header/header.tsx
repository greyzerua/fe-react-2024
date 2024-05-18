import headerLogo from '@/assets/logo.svg';
import type { ETheme } from '@/constants/themes';

import { EAppPage } from '../../constants/link-urls';
import type { SelectedProducts } from '../../types/selected-products';
import { AppLink } from '../app-link';
import { Auth } from '../auth';
import { Basket } from '../basket';
import { Burger } from '../burger';
import { ThemeSwitcher } from '../theme-switcher';
import { WidthContainer } from '../width-container';

import styles from './header.module.css';

interface Props {
    onPageChange: (page: EAppPage) => void;
    currentPage: EAppPage;
    onThemeChange: (theme: ETheme) => void;
    currentTheme: ETheme;
    selectedProducts: SelectedProducts;
}

export const HeaderComponent = ({ onPageChange, currentPage, selectedProducts, currentTheme, onThemeChange }: Props) => (
    <header className={styles.header}>
        <WidthContainer>
            <div className={styles['header__container']}>
                <div className={styles['header__inner_left']}>
                    <AppLink onPageChange={onPageChange} currentPage={currentPage} page={EAppPage.ROOT} className={styles['header__logo']}>
                        <img src={headerLogo} alt="logo" />
                    </AppLink>
                    <ThemeSwitcher onThemeChange={onThemeChange} currentTheme={currentTheme} />
                </div>

                <div className={styles['header__inner_right']}>
                    <nav>
                        <ul className={styles['header__nav-list']}>
                            <li>
                                <AppLink
                                    onPageChange={onPageChange}
                                    currentPage={currentPage}
                                    page={EAppPage.ABOUT}
                                    className={styles['header__nav-link']}
                                    dataHover="About"
                                >
                                    <span>About</span>
                                </AppLink>
                            </li>
                            <li>
                                <AppLink
                                    onPageChange={onPageChange}
                                    currentPage={currentPage}
                                    page={EAppPage.PRODUCTS}
                                    className={styles['header__nav-link']}
                                    dataHover="Products"
                                >
                                    <span>Products</span>
                                </AppLink>
                            </li>
                        </ul>
                    </nav>
                    <div className={styles['header__basket']}>
                        <Basket currentPage={currentPage} onPageChange={onPageChange} selectedProducts={selectedProducts} />
                    </div>
                    <div className={styles['header__burger']}>
                        <Burger />
                    </div>
                    <div className={styles['header__auth']}>
                        <Auth currentPage={currentPage} onPageChange={onPageChange} />
                    </div>
                </div>
            </div>
        </WidthContainer>
    </header>
);
