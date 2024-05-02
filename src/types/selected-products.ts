import type { Product } from '../interfaces/product';
import type { SelectedProduct } from '../interfaces/selected-product';

export type SelectedProducts = Record<Product['id'], SelectedProduct>;

export type AddSelectedProduct = (productId: Product['id']) => void;
