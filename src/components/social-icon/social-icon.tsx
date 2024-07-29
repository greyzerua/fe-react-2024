import type { ComponentProps } from 'react';

import type { EIconType } from '../icons';
import { Icon } from '../icons';
import { Link } from '../link';

import styles from './social-icon.module.css';

type Props = ComponentProps<'a'> & {
    iconType: EIconType;
};

export const SocialIcon = ({ href, iconType, className = '' }: Props) => (
    <Link href={href} className={`${styles['social-icon']} ${className}`}>
        <Icon iconType={iconType} fill="#EF4934" />
    </Link>
);
