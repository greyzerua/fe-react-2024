import { useMemo } from 'react';

import clsx from 'clsx';

import styles from './product-pagination.module.css';
interface Props {
    totalCount: number;
    pageSize: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const getButtonClassName = (isActive?: boolean) =>
    clsx(styles['products-pagination__button'], isActive && styles['products-pagination__button_active']);

export const ProductPagination = ({ totalCount, pageSize, currentPage, onPageChange }: Props) => {
    const pageCount = Math.ceil(totalCount / pageSize);

    const paginationNumbers = useMemo(() => {
        const paginationItems = [];
        for (let index = 1; index <= pageCount; index++) {
            paginationItems.push(index);
        }
        return paginationItems;
    }, [pageCount]);

    const onPreviousClick = () => {
        onPageChange(--currentPage);
    };

    const onNextClick = () => {
        onPageChange(++currentPage);
    };

    return (
        <div>
            <ul className={styles['products-pagination']}>
                <li>
                    <button disabled={currentPage === 1} className={getButtonClassName()} onClick={onPreviousClick}>
                        &lt;
                    </button>
                </li>
                {paginationNumbers.map((item) => (
                    <li key={item}>
                        <button className={getButtonClassName(currentPage === item)} onClick={() => onPageChange(item)}>
                            {item}
                        </button>
                    </li>
                ))}
                <li>
                    <button disabled={currentPage === pageCount} className={getButtonClassName()} onClick={onNextClick}>
                        &gt;
                    </button>
                </li>
            </ul>
        </div>
    );
};
