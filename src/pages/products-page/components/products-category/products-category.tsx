import { useState } from 'react';

import clsx from 'clsx';

import styles from './products-category.module.css';

interface Props {
    name: string;
}

const ProductCategory = ({ name }: Props) => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const toggleActive = () => {
        setIsActive(!isActive);
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
