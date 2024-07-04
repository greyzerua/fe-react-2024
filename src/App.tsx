import { Route, Routes } from 'react-router-dom';

import { LayoutComponent } from './components/layout-component/layout-component';
import { PageNotFound } from './components/page-not-found/page-not-found';
import { APP_LINK_URLS, EAppPage } from './constants/link-urls';
import { AboutPage } from './pages/about-page';
import { LoginPage } from './pages/login-page/login-page';
import { ProductPage } from './pages/product-page/product-page';
import { ProductsPage } from './pages/products-page';

const App = () => (
    <Routes>
        <Route path={APP_LINK_URLS[EAppPage.ROOT]} element={<LayoutComponent />}>
            <Route index element={<AboutPage />} />
            <Route path={APP_LINK_URLS[EAppPage.PRODUCTS]} element={<ProductsPage />} />
            <Route path={APP_LINK_URLS[EAppPage.PRODUCT]} element={<ProductPage />} />
            <Route path={APP_LINK_URLS[EAppPage.LOGIN]} element={<LoginPage />} />
            <Route path="*" element={<PageNotFound />} />
        </Route>
    </Routes>
);

export default App;
