import type { ComponentProps } from 'react';

import styles from './width-container.module.css';

export const WidthContainer = ({ children }: ComponentProps<'div'>) => <div className={styles['width-container']}>{children}</div>;
