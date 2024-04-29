import { BasketIcon } from './basket-icon';
import { FacebookIcon } from './facebook-icon';
import { InstagramIcon } from './instagram-icon';
import { LinkedinIcon } from './linkedin-icon';
import { LoginIcon } from './login-icon';
import { MoonIcon } from './moon-icon';
import { SunIcon } from './sun-icon';
import { UserIcon } from './user-icon';

export enum EIconType {
    FB,
    INSTAGRAM,
    LINKEDIN,
    BASKET,
    SUN,
    MOON,
    LOGIN,
    USER,
}

export const Icons = {
    [EIconType.FB]: FacebookIcon,
    [EIconType.INSTAGRAM]: InstagramIcon,
    [EIconType.LINKEDIN]: LinkedinIcon,
    [EIconType.BASKET]: BasketIcon,
    [EIconType.SUN]: SunIcon,
    [EIconType.MOON]: MoonIcon,
    [EIconType.LOGIN]: LoginIcon,
    [EIconType.USER]: UserIcon,
};

export const ICON_COLORS = {
    DEFAULT: 'var(--primaryWhite)',
};
