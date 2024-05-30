import type { KeyboardEvent } from 'react';
import { useEffect, useRef, useState } from 'react';

import { EIconType, Icon } from '@/components/icons';

import styles from './product-search.module.css';

interface Props {
    onSearchChange: (value: string) => void;
}

const ProductSearch = ({ onSearchChange }: Props) => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [value, setValue] = useState<string>('');

    const inputReference = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        onSearchChange(searchValue);
    }, [searchValue, onSearchChange]);

    const onSearchSubmit = () => {
        setSearchValue(inputReference.current?.value || '');
    };

    const onDeleteValue = () => {
        setValue('');
        setSearchValue('');
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
                onChange={(event) => setValue(event.target.value)}
                value={value}
            />
            <button className={styles['product-close__button']} onClick={onDeleteValue}>
                {value && <Icon iconType={EIconType.CLOSE} />}
            </button>
            <button className={styles['product-search__button']} onClick={onSearchSubmit}>
                <Icon iconType={EIconType.SEARCH} />
            </button>
        </div>
    );
};

export default ProductSearch;
