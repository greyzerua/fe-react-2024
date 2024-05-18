import { useState } from 'react';

import { Footer } from './components/footer';
import { HeaderComponent } from './components/header/header';
import { EAppPage } from './constants/link-urls';
import { ETheme, THEME_CLASSES } from './constants/themes';
import { AboutPage } from './pages/about-page';
import { ProductsPage } from './pages/products-page';
import type { AddSelectedProduct, SelectedProducts } from './types/selected-products';

import styles from './App.module.css';

const SELECTED_PRODUCTS_KEY = 'selected-products-key';
const THEME_KEY = 'theme-key';

const App = () => {
    const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? ETheme.DARK : ETheme.LIGHT;
    const selectedProductsStorage = JSON.parse(localStorage.getItem(SELECTED_PRODUCTS_KEY) || JSON.stringify({}));
    const selectedTheme = (localStorage.getItem(THEME_KEY) as ETheme | null) || defaultTheme;

    const [currentPage, setCurrentPage] = useState<EAppPage>(EAppPage.ABOUT);
    const [selectedProducts, setSelectedProducts] = useState<SelectedProducts>(selectedProductsStorage);
    const [currentTheme, setCurrentTheme] = useState<ETheme>(selectedTheme);

    const onThemeChange = (theme: ETheme) => {
        setCurrentTheme(theme);
        localStorage.setItem(THEME_KEY, theme);
    };

    const addSelectedProduct: AddSelectedProduct = (productId) => {
        const previousProductCount = selectedProducts[productId]?.count || 0;
        const newSelectedProducts = {
            ...selectedProducts,
            [productId]: { count: previousProductCount + 1 },
        };
        setSelectedProducts(newSelectedProducts);
        localStorage.setItem(SELECTED_PRODUCTS_KEY, JSON.stringify(newSelectedProducts));
    };

    let pageElement;

    switch (currentPage) {
        case EAppPage.ABOUT: {
            pageElement = <AboutPage />;
            break;
        }
        case EAppPage.PRODUCTS: {
            pageElement = <ProductsPage addSelectedProduct={addSelectedProduct} selectedProducts={selectedProducts} />;
            break;
        }
        default: {
            pageElement = null;
        }
    }

    return (
        <div className={`${THEME_CLASSES[currentTheme]} ${styles.app}`}>
            <HeaderComponent
                onPageChange={setCurrentPage}
                currentPage={currentPage}
                selectedProducts={selectedProducts}
                currentTheme={currentTheme}
                onThemeChange={onThemeChange}
            />
            <main className={styles['app-main']}>{pageElement}</main>
            <Footer />
        </div>
    );
};

export default App;
