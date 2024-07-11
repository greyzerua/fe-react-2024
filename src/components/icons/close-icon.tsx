import type { ComponentProps } from 'react';

import { ICON_COLORS } from './constants';

export const CloseIcon = ({ stroke = ICON_COLORS.CLOSE }: ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
            d="M19 19L10 10M10 10L1 1M10 10L19.0001 1M10 10L1 19.0001"
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
