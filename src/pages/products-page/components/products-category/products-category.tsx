import clsx from 'clsx';

import type { Category } from '@/interfaces/category';

import styles from './products-category.module.css';

interface Props {
    name: string;
    id: number;
    onSelectCategory: (id: Category['id']) => void;
    selectedCategory: Category['id'] | null;
}

const ProductCategory = ({ name, id, selectedCategory, onSelectCategory }: Props) => {
    const toggleActive = () => {
        onSelectCategory(id);
    };

    return (
        <button
            className={clsx(styles['product-category__button'], selectedCategory === id && styles['product-category__button_active'])}
            onClick={toggleActive}
        >
            {name}
        </button>
    );
};

export default ProductCategory;
