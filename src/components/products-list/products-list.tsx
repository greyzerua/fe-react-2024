import type { Product } from '../../interfaces/product';
import type { AddSelectedProduct, SelectedProducts } from '../../types/selected-products';
import { ProductsCard } from '../products-card';

import styles from './products-list.module.css';

interface Props {
    products: Product[];
    addSelectedProduct: AddSelectedProduct;
    selectedProducts: SelectedProducts;
}

export const ProductsList = ({ products, addSelectedProduct, selectedProducts }: Props) => (
    <div className={styles['products__list']}>
        {products.map((product) => (
            <ProductsCard
                key={product.id}
                product={product}
                addSelectedProduct={addSelectedProduct}
                selectedProduct={selectedProducts[product.id]}
            />
        ))}
    </div>
);
