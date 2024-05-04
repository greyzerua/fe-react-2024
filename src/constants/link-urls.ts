export enum EAppPage {
    BASKET = 'BASKET',
    LOGIN = 'LOGIN',
    SIGNUP = 'SIGNUP',
    ABOUT = 'ABOUT',
    PRODUCTS = 'PRODUCTS',
    ROOT = 'ROOT',
}

export const APP_LINK_URLS = {
    [EAppPage.BASKET]: '/basket',
    [EAppPage.LOGIN]: '/login',
    [EAppPage.SIGNUP]: '/sign-up',
    [EAppPage.ABOUT]: '/about',
    [EAppPage.PRODUCTS]: '/products',
    [EAppPage.ROOT]: '/',
};

export const EXTERNAL_LINK_URLS = {
    FB: 'https://www.facebook.com/master.of.code.team/',
    INSTAGRAM: 'https://www.linkedin.com/company/master-of-code/',
    LINKEDIN: 'https://www.instagram.com/master.of.code.team/',
    COURSE: 'https://www.mastersacademy.education/frontend-react-it',
    TELEGRAM: 'https://t.me/greyzerua',
    GITHUB: 'https://github.com/greyzerua',
};