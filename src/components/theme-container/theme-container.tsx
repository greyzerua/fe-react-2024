import type { ComponentProps } from 'react';
import { useSelector } from 'react-redux';

import { ETheme } from '@/constants/themes';
import { selectTheme } from '@/store/theme/slice';

import styles from './theme-container.module.css';

export const THEME_CLASSES = {
    [ETheme.LIGHT]: styles['light-theme'],
    [ETheme.DARK]: styles['dark-theme'],
};

export const ThemeContainer = ({ className, children }: ComponentProps<'div'>) => {
    const currentTheme = useSelector(selectTheme);
    return <div className={`${THEME_CLASSES[currentTheme]} ${className}`}>{children}</div>;
};
