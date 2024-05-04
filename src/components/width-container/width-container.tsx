import type { ComponentProps } from 'react';

import styles from './width-container.module.css';

export const WidthContainer = ({ children, className = '' }: ComponentProps<'div'>) => (
    <div className={`${styles['width-container']} ${className}`}>{children}</div>
);
