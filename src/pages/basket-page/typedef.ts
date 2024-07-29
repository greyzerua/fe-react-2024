import type { SelectedProduct } from '@/interfaces/selected-product';

export type UpdateSelectedProductCount = (productId: SelectedProduct['productId'], count: SelectedProduct['count']) => void;

export type DeleteSelectedProduct = (productId: SelectedProduct['productId']) => void;
