import type { ComponentProps } from 'react';

import { ICON_COLORS } from './constants';

export const ChevronLeftIcon = ({ stroke = ICON_COLORS.BLACK }: ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" viewBox="0 0 5 8" fill="none">
        <path d="M4 7L1 4L4 1" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
