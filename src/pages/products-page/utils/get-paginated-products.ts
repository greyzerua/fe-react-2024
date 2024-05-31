import type { Product } from '@/interfaces/product';

import { DEFAULT_PAGE_SIZE } from '../constants';

interface Paramaters {
    products: Array<Product>;
    currentPage: number;
    pageSize?: number;
}

export const getPaginatedProducts = ({ products, currentPage, pageSize = DEFAULT_PAGE_SIZE }: Paramaters) =>
    products.slice((currentPage - 1) * pageSize, currentPage * pageSize);
