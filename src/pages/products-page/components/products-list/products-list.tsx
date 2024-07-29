import type { Product } from '@/interfaces/product';

import { ProductsCard } from '../products-card/products-card';

import styles from './products-list.module.css';

interface Props {
    products: Product[];
}

export const ProductsList = ({ products }: Props) => (
    <div className={styles['products__list']}>
        {products.map((product) => (
            <ProductsCard key={product.id} product={product} />
        ))}
    </div>
);
