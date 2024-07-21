import type { ComponentProps } from 'react';
import { useNavigate } from 'react-router-dom';

import { EIconType, Icon } from '../icons';

import styles from './back-button.module.css';

export const BackButton = ({ className = '' }: ComponentProps<'button'>) => {
    const navigate = useNavigate();

    return (
        <button className={`${styles['back-button']} ${className}`} onClick={() => navigate(-1)}>
            <Icon iconType={EIconType.CHEVRON_LEFT} />
            Back
        </button>
    );
};
