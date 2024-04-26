import type { ComponentProps } from 'react';

import type { IconType } from '../icons';
import { Icon } from '../icons';
import { Link } from '../link';

import styles from './social-icon.module.css';

type Props = ComponentProps<'a'> & {
    iconType: IconType;
};

export const SocialIcon = ({ href, iconType, className = '' }: Props) => (
    <Link href={href} className={`${styles['social-icon']} ${className}`}>
        <Icon iconType={iconType} fill="#EF4934" />
    </Link>
);
