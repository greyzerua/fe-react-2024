import type { ComponentProps } from 'react';

import type { EIconType } from './constants';
import { Icons } from './constants';

type Props = ComponentProps<'svg'> & {
    iconType: EIconType;
};

export const Icon = ({ iconType, ...restProps }: Props) => {
    const ICON_COMPONENT = Icons[iconType];

    return <ICON_COMPONENT {...restProps} />;
};
