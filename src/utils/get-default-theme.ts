import { THEME_KEY } from '@/config/local-storage-config';
import { ETheme } from '@/constants/themes';

export const getDefaultTheme = () => {
    const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? ETheme.DARK : ETheme.LIGHT;
    return (localStorage.getItem(THEME_KEY) as ETheme | null) || defaultTheme;
};
