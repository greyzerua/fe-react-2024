import type { Product } from './product';

export interface SelectedProduct {
    productId: Product['id'];
    title: Product['title'];
    price: Product['price'];
    image: string;
    count: number;
}
