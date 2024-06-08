import { Outlet } from 'react-router-dom';

import { CartCountContextProvider } from '@/contexts/cart-count-context';

import { Footer } from '../footer';
import { HeaderComponent } from '../header/header';
import { ThemeContainer } from '../theme-container/theme-container';

import styles from './layout-component.module.css';

export const LayoutComponent = () => (
    <CartCountContextProvider>
        <ThemeContainer className={styles.app}>
            <HeaderComponent />
            <main className={styles['app-main']}>
                <Outlet />
            </main>
            <Footer />
        </ThemeContainer>
    </CartCountContextProvider>
);
