import { useCallback, useEffect, useState } from 'react';

import { useEventListener } from './useEventListener';

interface Parameters {
    breakpoint: number;
}

export const useCheckMobile = ({ breakpoint }: Parameters) => {
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= breakpoint);

    const checkIsInfinite = useCallback(() => {
        setIsMobile(window.innerWidth <= breakpoint);
    }, [breakpoint]);

    useEventListener({ eventType: 'resize', callback: checkIsInfinite });

    useEffect(() => {
        checkIsInfinite();
    }, [checkIsInfinite]);

    return { isMobile };
};
