import type { ComponentProps } from 'react';

import styles from './link.module.css';

type Props = ComponentProps<'a'> & {
    dataHover?: string;
};

export const Link = ({ className = '', target, children, dataHover, ...restProps }: Props) => (
    <a className={`${styles.link} ${className}`} target={target} data-hover={dataHover} {...restProps}>
        {children}
    </a>
);
