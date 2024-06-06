import { Outlet } from 'react-router-dom';

import type { SelectedProducts } from '@/types/selected-products';

import { Footer } from '../footer';
import { HeaderComponent } from '../header/header';
import { ThemeContainer } from '../theme-container/theme-container';

import styles from './layout-component.module.css';

interface Props {
    selectedProducts: SelectedProducts;
}

export const LayoutComponent = ({ selectedProducts }: Props) => (
    <ThemeContainer className={styles.app}>
        <HeaderComponent selectedProducts={selectedProducts} />
        <main className={styles['app-main']}>
            <Outlet />
        </main>
        <Footer />
    </ThemeContainer>
);
