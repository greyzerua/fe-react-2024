import { BasketIcon } from './basket-icon';
import { FacebookIcon } from './facebook-icon';
import { InstagramIcon } from './instagram-icon';
import { LinkedinIcon } from './linkedin-icon';
import { LoginIcon } from './login-icon';
import { MoonIcon } from './moon-icon';
import { SunIcon } from './sun-icon';
import { UserIcon } from './user-icon';

export enum IconType {
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
    [IconType.FB]: FacebookIcon,
    [IconType.INSTAGRAM]: InstagramIcon,
    [IconType.LINKEDIN]: LinkedinIcon,
    [IconType.BASKET]: BasketIcon,
    [IconType.SUN]: SunIcon,
    [IconType.MOON]: MoonIcon,
    [IconType.LOGIN]: LoginIcon,
    [IconType.USER]: UserIcon,
};
