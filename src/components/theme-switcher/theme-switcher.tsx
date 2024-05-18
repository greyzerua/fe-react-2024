import { ETheme } from '../../constants/themes';
import { EIconType, Icon } from '../icons';

import styles from './theme-switcher.module.css';

interface Props {
    onThemeChange: (theme: ETheme) => void;
    currentTheme: ETheme;
}

export const ThemeSwitcher = ({ onThemeChange, currentTheme }: Props) => {
    const onLightClick = () => {
        onThemeChange(ETheme.LIGHT);
    };

    const onDarkClick = () => {
        onThemeChange(ETheme.DARK);
    };

    return (
        <div className={styles['theme-switcher']}>
            <button
                className={`${styles['theme-switcher__button']} ${currentTheme === ETheme.LIGHT ? styles['theme-switcher__button_active'] : ''}`}
                onClick={onLightClick}
            >
                <Icon iconType={EIconType.SUN} />
            </button>
            <div className={styles['theme-switcher__separator']}></div>
            <button
                className={`${styles['theme-switcher__button']} ${currentTheme === ETheme.DARK ? styles['theme-switcher__button_active'] : ''}`}
                onClick={onDarkClick}
            >
                <Icon iconType={EIconType.MOON} />
            </button>
        </div>
    );
};
