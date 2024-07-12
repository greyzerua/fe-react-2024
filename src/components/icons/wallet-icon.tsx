import type { ComponentProps } from 'react';

import { ICON_COLORS } from './constants';

export const WalletIcon = ({ stroke = ICON_COLORS.DEFAULT }: ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
        <path
            d="M1 7V11.8002C1 12.9203 1 13.4801 1.21799 13.9079C1.40973 14.2842 1.71547 14.5905 2.0918 14.7822C2.5192 15 3.07899 15 4.19691 15H15.8031C16.921 15 17.48 15 17.9074 14.7822C18.2837 14.5905 18.5905 14.2842 18.7822 13.9079C19 13.4805 19 12.9215 19 11.8036V7M1 7V5M1 7H19M1 5V4.2002C1 3.08009 1 2.51962 1.21799 2.0918C1.40973 1.71547 1.71547 1.40973 2.0918 1.21799C2.51962 1 3.08009 1 4.2002 1H15.8002C16.9203 1 17.4796 1 17.9074 1.21799C18.2837 1.40973 18.5905 1.71547 18.7822 2.0918C19 2.5192 19 3.07899 19 4.19691V5M1 5H19M5 11H9M19 7V5"
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);