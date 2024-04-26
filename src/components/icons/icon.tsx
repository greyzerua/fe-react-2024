import type { ComponentProps } from 'react';

import type { IconType } from './constants';
import { Icons } from './constants';

type Props = ComponentProps<'svg'> & {
    iconType: IconType;
};

export const Icon = ({ iconType, fill }: Props) => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const IconComponent = Icons[iconType];

    return <IconComponent fill={fill} />;
};
