import { useEffect } from 'react';

interface Parameters {
    eventType: string;
    callback: EventListener;
}

export const useEventListener = ({ eventType, callback }: Parameters) => {
    useEffect(() => {
        window.addEventListener(eventType, callback);
        return () => {
            window.removeEventListener(eventType, callback);
        };
    }, [eventType, callback]);
};
