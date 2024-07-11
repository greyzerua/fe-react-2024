import type { ComponentProps } from 'react';

import { ICON_COLORS } from './constants';

export const PlusIcon = ({ stroke = ICON_COLORS.DEFAULT }: ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M1 7H7M7 7H13M7 7V13M7 7V1" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
