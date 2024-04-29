import type { ComponentProps } from 'react';

import styles from './link.module.css';

type Props = ComponentProps<'a'> & {
    dataHover?: string;
};

export const Link = ({ className = '', href, target = '_blank', children, dataHover }: Props) => (
    <a href={href} className={`${styles.link} ${className}`} target={target} data-hover={dataHover}>
        {children}
    </a>
);
