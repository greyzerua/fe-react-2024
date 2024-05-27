import ProductCategory from '../products-category/products-category';

import styles from './products-category-list.module.css';

const CATEGORIES = ['Electronics', 'Shoes', 'Clothes'];

const ProductCategoryList = () => (
    <div className={styles['products-category-list']}>
        {CATEGORIES.map((category) => (
            <ProductCategory key={category} name={category} />
        ))}
    </div>
);

export default ProductCategoryList;
