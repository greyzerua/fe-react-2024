import { useEffect, useState } from 'react';

import clsx from 'clsx';

import { EIconType, Icon } from '@/components/icons';
import { ICON_COLORS } from '@/components/icons/constants';

import { EProductsSort, PRODUCTS_SORTING } from '../../constants';

import styles from './products-sort-dropdown.module.css';

const DROPDOWN_ELEMENTS = [EProductsSort.PRICE_DESC, EProductsSort.PRICE_ASC, EProductsSort.DATE_DESC, EProductsSort.DATE_ASC];

interface Props {
    onSortingChange: (sortingType: EProductsSort) => void;
}

const ProductSortDropdown = ({ onSortingChange }: Props) => {
    const [selectedItem, setSelectedItem] = useState<EProductsSort>(DROPDOWN_ELEMENTS[0]);
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const [isButtonHovered, setIsButtonHovered] = useState<boolean>(false);

    useEffect(() => {
        onSortingChange(selectedItem);
    }, [selectedItem]);

    const toggleOpened = () => {
        setIsOpened(!isOpened);
    };

    const toggleButtonHovered = () => {
        setIsButtonHovered(!isButtonHovered);
    };

    const onItemClick = (element: EProductsSort) => {
        setSelectedItem(element);
        toggleOpened();
    };

    return (
        <div className={clsx(styles['products-sort-dropdown'], isOpened && styles['products-sort-dropdown_active'])}>
            <button
                className={styles['products-sort-dropdown__button']}
                onClick={toggleOpened}
                onMouseEnter={toggleButtonHovered}
                onMouseLeave={toggleButtonHovered}
            >
                {PRODUCTS_SORTING[selectedItem].name}
                <span className={styles['products-sort-dropdown__arrow']}>
                    <Icon
                        iconType={isOpened ? EIconType.ARROW_UP : EIconType.ARROW_DOWN}
                        stroke={isButtonHovered ? ICON_COLORS.DEFAULT : ICON_COLORS.FILTER}
                    />
                </span>
            </button>
            <ul className={styles['products-sort-dropdown__list']}>
                {DROPDOWN_ELEMENTS.filter((element) => element !== selectedItem).map((element) => (
                    <li key={element} className={styles['products-sort-dropdown__list-item']} onClick={() => onItemClick(element)}>
                        {PRODUCTS_SORTING[element].name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductSortDropdown;
