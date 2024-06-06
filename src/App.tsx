import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { LayoutComponent } from './components/layout-component/layout-component';
import { SELECTED_PRODUCTS_KEY } from './config/local-storage-config';
import { APP_LINK_URLS, EAppPage } from './constants/link-urls';
import { AboutPage } from './pages/about-page';
import { ProductsPage } from './pages/products-page';
import type { AddSelectedProduct, SelectedProducts } from './types/selected-products';

const App = () => {
    const selectedProductsStorage = JSON.parse(localStorage.getItem(SELECTED_PRODUCTS_KEY) || JSON.stringify({}));
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

    return (
        <Routes>
            <Route path={APP_LINK_URLS[EAppPage.ROOT]} element={<LayoutComponent selectedProducts={selectedProducts} />}>
                <Route index element={<AboutPage />} />
                <Route
                    path={APP_LINK_URLS[EAppPage.PRODUCTS]}
                    element={<ProductsPage addSelectedProduct={addSelectedProduct} selectedProducts={selectedProducts} />}
                />
            </Route>
        </Routes>
    );
};

export default App;
