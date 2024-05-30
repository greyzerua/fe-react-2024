import type { Category } from '@/interfaces/category';

const CATEGORY_DATE = '2024-04-26T08:20:47.094Z';

export const CLOTHES_CATEGORY: Category = {
    id: 1,
    name: 'Clothes',
    image: 'https://i.imgur.com/QkIa5tT.jpeg',
    creationAt: CATEGORY_DATE,
    updatedAt: CATEGORY_DATE,
};

export const ELECTRONICS_CATEGORY: Category = {
    id: 2,
    name: 'Electronics',
    image: 'https://i.imgur.com/ZANVnHE.jpeg',
    creationAt: CATEGORY_DATE,
    updatedAt: CATEGORY_DATE,
};

export const SHOES_CATEGORY: Category = {
    id: 4,
    name: 'Shoes',
    image: 'https://i.imgur.com/ZANVnHE.jpeg',
    creationAt: CATEGORY_DATE,
    updatedAt: CATEGORY_DATE,
};

export const FURNITURE_CATEGORY: Category = {
    id: 3,
    name: 'Furniture',
    image: 'https://i.imgur.com/Qphac99.jpeg',
    creationAt: CATEGORY_DATE,
    updatedAt: CATEGORY_DATE,
};

export const CATEGORIES: Array<Category> = [CLOTHES_CATEGORY, ELECTRONICS_CATEGORY, FURNITURE_CATEGORY, SHOES_CATEGORY];
