import { SELECTED_PRODUCTS_KEY } from '@/config/local-storage-config';
import type { SelectedProducts } from '@/types/selected-products';

export const getSelectedProducts = (): SelectedProducts => JSON.parse(localStorage.getItem(SELECTED_PRODUCTS_KEY) || JSON.stringify({}));
