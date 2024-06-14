import type { Product } from '@/interfaces/product';

export enum EProductsSort {
    PRICE_ASC = 'PRICE_ASC',
    PRICE_DESC = 'PRICE_DESC',
    DATE_ASC = 'DATE_ASC',
    DATE_DESC = 'DATE_DESC',
}

export const PRODUCTS_SORTING = {
    [EProductsSort.PRICE_ASC]: {
        name: 'Price (Low- High)',
        predicate: (a: Product, b: Product) => a.price - b.price,
        type: 'asc',
    },
    [EProductsSort.PRICE_DESC]: {
        name: 'Price (High - Low)',
        predicate: (a: Product, b: Product) => b.price - a.price,
        type: 'desc',
    },
    [EProductsSort.DATE_ASC]: {
        name: 'Oldest',
        predicate: (a: Product, b: Product) => new Date(a.creationAt).getTime() - new Date(b.creationAt).getTime(),
        type: 'asc',
    },
    [EProductsSort.DATE_DESC]: {
        name: 'Newest',
        predicate: (a: Product, b: Product) => new Date(b.creationAt).getTime() - new Date(a.creationAt).getTime(),
        type: 'desc',
    },
};

export const DEFAULT_PAGE_SIZE = 8;

export const DEFAULT_PAGE = 1;

export const DOTS = 'DOTS';
