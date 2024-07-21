import { useMemo } from 'react';

import clsx from 'clsx';

import { EIconType, Icon } from '@/components/icons';
import { ICON_COLORS } from '@/components/icons/constants';

import { DOTS } from '../../constants';
import { getPaginationRange } from '../../utils/get-pagination-range';

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

    const range = useMemo(() => getPaginationRange(currentPage, pageCount), [currentPage, pageCount]);

    const onPreviousClick = () => {
        onPageChange(--currentPage);
    };

    const onNextClick = () => {
        onPageChange(++currentPage);
    };

    const isPreviousDisabled = currentPage === 1;
    const isNextDisabled = currentPage === pageCount;
    return (
        <div>
            <ul className={styles['products-pagination']}>
                <li>
                    <button disabled={isPreviousDisabled} className={getButtonClassName()} onClick={onPreviousClick}>
                        <Icon iconType={EIconType.CHEVRON_LEFT} stroke={isPreviousDisabled ? ICON_COLORS.DISABLED : ICON_COLORS.BLACK} />
                    </button>
                </li>
                {range.map((item, index) => (
                    <li key={`page-${item}-i-${index}`}>
                        {item === DOTS ? (
                            <span className={styles['products-pagination__ellipsis']}>...</span>
                        ) : (
                            <button className={getButtonClassName(currentPage === item)} onClick={() => onPageChange(item)}>
                                {item}
                            </button>
                        )}
                    </li>
                ))}
                <li>
                    <button disabled={isNextDisabled} className={getButtonClassName()} onClick={onNextClick}>
                        <Icon iconType={EIconType.CHEVRON_RIGHT} stroke={isNextDisabled ? ICON_COLORS.DISABLED : ICON_COLORS.BLACK} />
                    </button>
                </li>
            </ul>
        </div>
    );
};
