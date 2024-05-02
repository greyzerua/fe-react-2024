import { useState } from 'react';

import { Footer } from './components/footer';
import { HeaderComponent } from './components/header/header';
import { AboutPage } from './pages/about-page';
import { ProductsPage } from './pages/products-page';
import type { AddSelectedProduct, SelectedProducts } from './types/selected-products';
import { EAppPage } from './link-urls';

import './App.css';

const SELECTED_PRODUCTS_KEY = 'selected-products-key';

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
        <>
            <HeaderComponent onPageChange={setCurrentPage} currentPage={currentPage} selectedProducts={selectedProducts} />
            <main>{pageElement}</main>
            <Footer />
        </>
    );
};

export default App;
