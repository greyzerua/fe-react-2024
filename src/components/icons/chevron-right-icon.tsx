import type { ComponentProps } from 'react';

import { ICON_COLORS } from './constants';

export const ChevronRightIcon = ({ stroke = ICON_COLORS.BLACK }: ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" viewBox="0 0 5 8" fill="none">
        <path
            d="M0.75 1.08325L3.66667 3.99992L0.75 6.91659"
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
