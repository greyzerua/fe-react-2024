import { useState } from 'react';

import clsx from 'clsx';

import { EIconType, Icon } from '@/components/icons';
import { ICON_COLORS } from '@/components/icons/constants';

import styles from './products-sort-dropdown.module.css';

const DROPDOWN_ELEMENTS = ['Price (High - Low)', 'Price (Low- High)', 'Newest', 'Oldest'];

const ProductSortDropdown = () => {
    const [selectedItem, setSelectedItem] = useState<string>(DROPDOWN_ELEMENTS[0]);
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const [isButtonHovered, setIsButtonHovered] = useState<boolean>(false);

    const toggleOpened = () => {
        setIsOpened(!isOpened);
    };

    const toggleButtonHovered = () => {
        setIsButtonHovered(!isButtonHovered);
    };

    const onItemClick = (element: string) => {
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
                {selectedItem}
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
                        {element}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductSortDropdown;
