import headerLogo from '@/assets/logo.svg';

import { Auth } from '../auth';
import { Basket } from '../basket';
import { Burger } from '../burger';
import { Link } from '../link';
import { ThemeSwitcher } from '../theme-switcher';
import { WidthContainer } from '../width-container';

import styles from './header.module.css';

export const HeaderComponent = () => (
    <header className={styles.header}>
        <WidthContainer>
            <div className={styles['header__container']}>
                <div className={styles['header__inner_left']}>
                    <Link href="/" className={styles['header__logo']}>
                        <img src={headerLogo} alt="logo" />
                    </Link>
                    <ThemeSwitcher />
                </div>

                <div className={styles['header__inner_right']}>
                    <nav>
                        <ul className={styles['header__nav-list']}>
                            <li className={styles['header__nav-item']}>
                                <Link href="/about" className="bold-hover" dataHover="About">
                                    <span>About</span>
                                </Link>
                            </li>
                            <li className={styles['header__nav-item']}>
                                <Link href="/products" className="bold-hover" dataHover="Products">
                                    <span>Products</span>
                                </Link>
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
