import type { ComponentProps } from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { APP_LINK_URLS, EAppPage } from '@/constants/link-urls';
import { useAuth } from '@/hooks/useAuth';

import { EIconType, Icon } from '../icons';

export const AuthProtected = ({ children }: ComponentProps<'div'>) => {
    const navigate = useNavigate();

    const { isAuthorized, verifyToken } = useAuth();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        if (!isAuthorized) {
            navigate(APP_LINK_URLS[EAppPage.LOGIN]);
        }
    }, [isAuthorized, navigate]);

    const verifyUser = useCallback(async () => {
        setIsLoading(true);
        const result = await verifyToken();
        if (!result?.isAuthorized) {
            navigate(APP_LINK_URLS[EAppPage.LOGIN]);
        }
        setIsLoading(false);
    }, [navigate, verifyToken]);

    useEffect(() => {
        verifyUser();
    }, [verifyUser]);

    return isLoading ? <Icon iconType={EIconType.LOADING} /> : children;
};
