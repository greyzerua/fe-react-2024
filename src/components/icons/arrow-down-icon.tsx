import type { ComponentProps } from 'react';

import { ICON_COLORS } from './constants';

export const ArrowDownIcon = ({ stroke = ICON_COLORS.DEFAULT }: ComponentProps<'svg'>) => (
    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 1.5L4 4.5L1 1.5" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
