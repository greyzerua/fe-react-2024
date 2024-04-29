import { EIconType, Icon } from '../icons';

import styles from './theme-switcher.module.css';

export const ThemeSwitcher = () => (
    <div className={styles['theme-switcher']}>
        <button className={`${styles['theme-switcher__button']} ${styles['theme-switcher__button_active']}`}>
            <Icon iconType={EIconType.SUN} />
        </button>
        <div className={styles['theme-switcher__separator']}></div>
        <button className={styles['theme-switcher__button']}>
            <Icon iconType={EIconType.MOON} />
        </button>
    </div>
);
