import type { ComponentProps } from 'react';

import { ICON_COLORS } from './constants';

export const ArrowUpIcon = ({ stroke = ICON_COLORS.DEFAULT }: ComponentProps<'svg'>) => (
    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 4.5L4 1.5L7 4.5" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
