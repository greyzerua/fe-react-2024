import { useParams } from 'react-router-dom';

import { WidthContainer } from '@/components/width-container';

import { ProductCardInfo } from './components/product-card-info/product-card-info';
import { useProduct } from './hooks/useProduct';

import styles from './product-page.module.css';

export const ProductPage = () => {
    const { id } = useParams();
    const productId = Number(id) || undefined;

    const { product } = useProduct(productId);

    return (
        <WidthContainer>
            <section className={styles['product-page']}>{product && <ProductCardInfo product={product} />}</section>
        </WidthContainer>
    );
};
