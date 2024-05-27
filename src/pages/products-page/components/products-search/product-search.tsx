import { EIconType, Icon } from '@/components/icons';

import styles from './product-search.module.css';

const ProductSearch = () => (
    <div className={styles['product-search']}>
        <input type="text" placeholder="Search..." className={styles['product-search__input']} />
        <button className={styles['product-search__button']}>
            <Icon iconType={EIconType.SEARCH} />
        </button>
    </div>
);

export default ProductSearch;
