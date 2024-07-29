import type { Category } from './category';

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    creationAt: string;
    updatedAt: string;
    category: Category;
}

export interface ProductsResponse {
    products: Array<Product>;
    total: number;
}
