import { useEffect, useState } from 'react';

import { CATEGORIES } from '@/data/categories';
import type { Category } from '@/interfaces/category';

import ProductCategory from '../products-category/products-category';

import styles from './products-category-list.module.css';

interface Props {
    onCategoriesChange: (categories: Array<Category['id']>) => void;
}

const ProductCategoryList = ({ onCategoriesChange }: Props) => {
    const [selectedCategories, setSelectedCategories] = useState<Array<Category['id']>>([]);

    useEffect(() => {
        onCategoriesChange(selectedCategories);
    }, [selectedCategories, onCategoriesChange]);

    const onSelectCategory = (id: Category['id']) => {
        setSelectedCategories((previousSelectedCategories) =>
            previousSelectedCategories.includes(id)
                ? previousSelectedCategories.filter((categoryId) => categoryId !== id)
                : [...previousSelectedCategories, id],
        );
    };

    return (
        <div className={styles['products-category-list']}>
            {CATEGORIES.map((category) => (
                <ProductCategory key={category.id} id={category.id} name={category.name} onSelectCategory={onSelectCategory} />
            ))}
        </div>
    );
};

export default ProductCategoryList;
