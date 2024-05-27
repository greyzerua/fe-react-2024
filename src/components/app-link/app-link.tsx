import type { ComponentProps, MouseEvent } from 'react';

import clsx from 'clsx';

import type { EAppPage } from '../../constants/link-urls';
import { APP_LINK_URLS } from '../../constants/link-urls';
import { Link } from '../link';

import styles from './app-link.module.css';

interface GetClassNameParameters {
    className?: string;
    dataHover?: string;
    isCurrentPage: boolean;
}

const getClassName = ({ className, dataHover, isCurrentPage }: GetClassNameParameters) =>
    clsx(styles['app-link'], className, dataHover && 'bold-hover', isCurrentPage && styles['app-link_active']);

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
            className={getClassName({ className, dataHover, isCurrentPage: currentPage === page })}
            data-hover={dataHover}
            onClick={onClick}
            {...restProps}
        >
            {children}
        </Link>
    );
};
