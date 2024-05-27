import { useState } from 'react';

import { Footer } from './components/footer';
import { HeaderComponent } from './components/header/header';
import { ThemeContainer } from './components/theme-container/theme-container';
import { SELECTED_PRODUCTS_KEY } from './config/local-storage-config';
import { EAppPage } from './constants/link-urls';
import { AboutPage } from './pages/about-page';
import { ProductsPage } from './pages/products-page';
import type { AddSelectedProduct, SelectedProducts } from './types/selected-products';

import styles from './App.module.css';

const App = () => {
    const selectedProductsStorage = JSON.parse(localStorage.getItem(SELECTED_PRODUCTS_KEY) || JSON.stringify({}));
    const [currentPage, setCurrentPage] = useState<EAppPage>(EAppPage.ABOUT);
    const [selectedProducts, setSelectedProducts] = useState<SelectedProducts>(selectedProductsStorage);

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
        <ThemeContainer className={styles.app}>
            <HeaderComponent onPageChange={setCurrentPage} currentPage={currentPage} selectedProducts={selectedProducts} />
            <main className={styles['app-main']}>{pageElement}</main>
            <Footer />
        </ThemeContainer>
    );
};

export default App;
