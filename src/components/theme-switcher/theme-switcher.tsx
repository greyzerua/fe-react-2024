import { useEffect, useState } from 'react';

import clsx from 'clsx';

import { THEME_KEY } from '@/config/local-storage-config';
import { getDefaultTheme } from '@/utils/get-default-theme';

import { ETheme, THEME_UPDATE_EVENT } from '../../constants/themes';
import { EIconType, Icon } from '../icons';

import styles from './theme-switcher.module.css';

const getClassName = (isCurrentTheme: boolean) =>
    clsx(styles['theme-switcher__button'], isCurrentTheme && styles['theme-switcher__button_active']);

export const ThemeSwitcher = () => {
    const [currentTheme, setCurrentTheme] = useState<ETheme>(getDefaultTheme());

    useEffect(() => {
        localStorage.setItem(THEME_KEY, currentTheme);
        window.dispatchEvent(new Event(THEME_UPDATE_EVENT));
    }, [currentTheme]);

    const onLightClick = () => {
        setCurrentTheme(ETheme.LIGHT);
    };

    const onDarkClick = () => {
        setCurrentTheme(ETheme.DARK);
    };

    return (
        <div className={styles['theme-switcher']}>
            <button className={getClassName(currentTheme === ETheme.LIGHT)} onClick={onLightClick}>
                <Icon iconType={EIconType.SUN} />
            </button>
            <div className={styles['theme-switcher__separator']}></div>
            <button className={getClassName(currentTheme === ETheme.DARK)} onClick={onDarkClick}>
                <Icon iconType={EIconType.MOON} />
            </button>
        </div>
    );
};
