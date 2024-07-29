import { useEffect, useState } from 'react';

import type { Category } from '@/interfaces/category';

import ProductCategory from '../products-category/products-category';

import styles from './products-category-list.module.css';

interface Props {
    categories: Array<Category>;
    onCategoriesChange: (categories: Category['id'] | null) => void;
}

const ProductCategoryList = ({ onCategoriesChange, categories }: Props) => {
    const [selectedCategory, setSelectedCategory] = useState<Category['id'] | null>(null);

    useEffect(() => {
        onCategoriesChange(selectedCategory);
    }, [selectedCategory, onCategoriesChange]);

    const onSelectCategory = (id: Category['id']) => {
        setSelectedCategory((previousCategory) => (previousCategory === id ? null : id));
    };

    return (
        <div className={styles['products-category-list']}>
            {categories.map((category) => (
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
