import type { ComponentProps, MouseEvent } from 'react';

import clsx from 'clsx';

import type { EAppPage } from '../../constants/link-urls';
import { APP_LINK_URLS } from '../../constants/link-urls';
import { Link } from '../link';

import styles from './app-link.module.css';

type Props = ComponentProps<'a'> & {
    dataHover?: string;
    currentPage: EAppPage;
    page: EAppPage;
    onPageChange: (page: EAppPage) => void;
};

export const AppLink = ({ className, onPageChange, page, currentPage, children, dataHover, ...restProps }: Props) => {
    const href = APP_LINK_URLS[page];

    const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        onPageChange(page);
    };

    return (
        <Link
            href={href}
            className={clsx(styles['app-link'], className, dataHover && 'bold-hover', page === currentPage && styles['app-link_active'])}
            data-hover={dataHover}
            onClick={onClick}
            {...restProps}
        >
            {children}
        </Link>
    );
};
