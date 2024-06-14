import { useEffect, useState } from 'react';

import { CATEGORIES } from '@/data/categories';
import type { Category } from '@/interfaces/category';

import ProductCategory from '../products-category/products-category';

import styles from './products-category-list.module.css';

interface Props {
    onCategoriesChange: (categories: Category['id'] | null) => void;
}

const ProductCategoryList = ({ onCategoriesChange }: Props) => {
    const [selectedCategory, setSelectedCategory] = useState<Category['id'] | null>(null);

    useEffect(() => {
        onCategoriesChange(selectedCategory);
    }, [selectedCategory, onCategoriesChange]);

    const onSelectCategory = (id: Category['id']) => {
        setSelectedCategory((previousCategory) => (previousCategory === id ? null : id));
    };

    return (
        <div className={styles['products-category-list']}>
            {CATEGORIES.map((category) => (
                <ProductCategory
                    key={category.id}
                    id={category.id}
                    name={category.name}
                    selectedCategory={selectedCategory}
                    onSelectCategory={onSelectCategory}
                />
            ))}
        </div>
    );
};

export default ProductCategoryList;
