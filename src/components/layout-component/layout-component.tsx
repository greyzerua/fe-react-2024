import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { CartCountContextProvider } from '@/contexts/cart-count-context';

import { Footer } from '../footer';
import { HeaderComponent } from '../header/header';
import { ThemeContainer } from '../theme-container/theme-container';

import 'react-toastify/ReactToastify.css';
import styles from './layout-component.module.css';

export const LayoutComponent = () => (
    <CartCountContextProvider>
        <ToastContainer />
        <ThemeContainer className={styles.app}>
            <HeaderComponent />
            <main className={styles['app-main']}>
                <Outlet />
            </main>
            <Footer />
        </ThemeContainer>
    </CartCountContextProvider>
);
