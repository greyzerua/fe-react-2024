import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import clsx from 'clsx';

import { THEME_KEY } from '@/config/local-storage-config';
import { selectTheme, setTheme } from '@/redux/theme/slice';

import { ETheme } from '../../constants/themes';
import { EIconType, Icon } from '../icons';

import styles from './theme-switcher.module.css';

const getClassName = (isCurrentTheme: boolean) =>
    clsx(styles['theme-switcher__button'], isCurrentTheme && styles['theme-switcher__button_active']);

export const ThemeSwitcher = () => {
    const dispatch = useDispatch();
    const currentTheme = useSelector(selectTheme);

    useEffect(() => {
        localStorage.setItem(THEME_KEY, currentTheme);
    }, [currentTheme]);

    const onLightClick = () => {
        dispatch(setTheme(ETheme.LIGHT));
    };

    const onDarkClick = () => {
        dispatch(setTheme(ETheme.DARK));
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
