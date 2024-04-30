import type { ComponentProps, MouseEvent } from 'react';

import type { EAppPage } from '../../link-urls';
import { APP_LINK_URLS } from '../../link-urls';
import { Link } from '../link';

import styles from './app-link.module.css';

type Props = ComponentProps<'a'> & {
    dataHover?: string;
    currentPage: EAppPage;
    page: EAppPage;
    onPageChange: (page: EAppPage) => void;
};

export const AppLink = ({ className = '', onPageChange, page, currentPage, children, dataHover, ...restProps }: Props) => {
    const href = APP_LINK_URLS[page];

    const isActive = page === currentPage;

    const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        onPageChange(page);
    };

    const classNames = `${styles['app-link']} ${className} ${dataHover ? 'bold-hover' : ''}  ${isActive ? styles['app-link_active'] : ''}`;

    return (
        <Link href={href} className={classNames} data-hover={dataHover} onClick={onClick} {...restProps}>
            {children}
        </Link>
    );
};