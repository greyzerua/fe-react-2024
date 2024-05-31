import { useState } from 'react';

import clsx from 'clsx';

import type { Category } from '@/interfaces/category';

import styles from './products-category.module.css';

interface Props {
    name: string;
    id: number;
    onSelectCategory: (id: Category['id']) => void;
}

const ProductCategory = ({ name, id, onSelectCategory }: Props) => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const toggleActive = () => {
        setIsActive(!isActive);
        onSelectCategory(id);
    };

    return (
        <button
            className={clsx(styles['product-category__button'], isActive && styles['product-category__button_active'])}
            onClick={toggleActive}
        >
            {name}
        </button>
    );
};

export default ProductCategory;
