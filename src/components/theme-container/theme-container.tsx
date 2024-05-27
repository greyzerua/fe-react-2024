import type { ComponentProps } from 'react';
import { useEffect, useState } from 'react';

import { ETheme, THEME_UPDATE_EVENT } from '@/constants/themes';
import { getDefaultTheme } from '@/utils/get-default-theme';

import styles from './theme-container.module.css';

export const THEME_CLASSES = {
    [ETheme.LIGHT]: styles['light-theme'],
    [ETheme.DARK]: styles['dark-theme'],
};

export const ThemeContainer = ({ className, children }: ComponentProps<'div'>) => {
    const [currentTheme, setCurrentTheme] = useState<ETheme>(getDefaultTheme());

    const updateCurrentTheme = () => {
        setCurrentTheme(getDefaultTheme());
    };

    useEffect(() => {
        window.addEventListener(THEME_UPDATE_EVENT, updateCurrentTheme);
        return () => {
            window.removeEventListener(THEME_UPDATE_EVENT, updateCurrentTheme);
        };
    }, []);

    return <div className={`${THEME_CLASSES[currentTheme]} ${className}`}>{children}</div>;
};
