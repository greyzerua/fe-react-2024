import type { KeyboardEvent } from 'react';
import { useEffect, useRef, useState } from 'react';

import { EIconType, Icon } from '@/components/icons';

import styles from './product-search.module.css';

interface Props {
    onSearchChange: (value: string) => void;
}

const ProductSearch = ({ onSearchChange }: Props) => {
    const [value, setValue] = useState<string>('');

    const inputReference = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        onSearchChange(value);
    }, [value]);

    const onSearchSubmit = () => {
        setValue(inputReference.current?.value || '');
    };

    const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onSearchSubmit();
        }
    };

    return (
        <div className={styles['product-search']}>
            <input
                ref={inputReference}
                type="text"
                placeholder="Search..."
                className={styles['product-search__input']}
                onKeyDown={onKeyDown}
            />
            <button className={styles['product-search__button']} onClick={onSearchSubmit}>
                <Icon iconType={EIconType.SEARCH} />
            </button>
        </div>
    );
};

export default ProductSearch;
