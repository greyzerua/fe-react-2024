import { useState } from 'react';

import { Footer } from './components/footer';
import { HeaderComponent } from './components/header/header';
import { AboutPage } from './pages/about-page';
import { ProductsPage } from './pages/products-page';
import { EAppPage } from './link-urls';

import './App.css';

const App = () => {
    const [currentPage, setCurrentPage] = useState<EAppPage>(EAppPage.ABOUT);

    let pageElement;

    switch (currentPage) {
        case EAppPage.ABOUT: {
            pageElement = <AboutPage />;
            break;
        }
        case EAppPage.PRODUCTS: {
            pageElement = <ProductsPage />;
            break;
        }
        default: {
            pageElement = null;
        }
    }

    return (
        <>
            <HeaderComponent onPageChange={setCurrentPage} currentPage={currentPage} />
            <main>{pageElement}</main>
            <Footer />
        </>
    );
};

export default App;
