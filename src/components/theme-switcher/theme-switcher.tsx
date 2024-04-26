import { Icon, IconType } from '../icons';

import styles from './theme-switcher.module.css';

export const ThemeSwitcher = () => (
    <div className={styles['theme-switcher']}>
        <button className={`${styles['theme-switcher__button']} ${styles['theme-switcher__button_active']}`}>
            <Icon iconType={IconType.SUN} />
        </button>
        <div className={styles['theme-switcher__separator']}></div>
        <button className={styles['theme-switcher__button']}>
            <Icon iconType={IconType.MOON} />
        </button>
    </div>
);
