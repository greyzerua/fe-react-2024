import type { ComponentProps } from 'react';

import { ICON_COLORS } from './constants';

export const LogOutIcon = ({ stroke = ICON_COLORS.DEFAULT }: ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
            d="M9 12L6 9M6 9L9 6M6 9H17M12 4.24859V4.2002C12 3.08009 12 2.51962 11.782 2.0918C11.5903 1.71547 11.2845 1.40973 10.9082 1.21799C10.4804 1 9.91991 1 8.7998 1H4.1998C3.0797 1 2.52043 1 2.09261 1.21799C1.71628 1.40973 1.40952 1.71547 1.21777 2.0918C1 2.5192 1 3.07899 1 4.19691V13.8036C1 14.9215 1 15.4805 1.21777 15.9079C1.40952 16.2842 1.71628 16.5905 2.09261 16.7822C2.52001 17 3.079 17 4.19691 17H8.80309C9.92101 17 10.4808 17 10.9082 16.7822C11.2845 16.5905 11.5903 16.2839 11.782 15.9076C12 15.4798 12 14.9201 12 13.8V13.75"
            stroke={stroke}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
