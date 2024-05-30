import { ArrowDownIcon } from './arrow-down-icon';
import { ArrowUpIcon } from './arrow-up-icon';
import { BasketIcon } from './basket-icon';
import { CloseIcon } from './close-icon';
import { FacebookIcon } from './facebook-icon';
import { InstagramIcon } from './instagram-icon';
import { LinkedinIcon } from './linkedin-icon';
import { LoginIcon } from './login-icon';
import { MoonIcon } from './moon-icon';
import { SearchIcon } from './search-icon';
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
    SEARCH,
    ARROW_UP,
    ARROW_DOWN,
    CLOSE,
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
    [EIconType.SEARCH]: SearchIcon,
    [EIconType.ARROW_UP]: ArrowUpIcon,
    [EIconType.ARROW_DOWN]: ArrowDownIcon,
    [EIconType.CLOSE]: CloseIcon,
};

export const ICON_COLORS = {
    DEFAULT: 'var(--primaryWhite)',
    BLACK: 'var(--iconColor)',
    FILTER: 'var(--filterColor)',
};
