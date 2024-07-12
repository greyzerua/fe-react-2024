import type { ReactNode } from 'react';
import { createContext, useEffect, useState } from 'react';

interface BurgerContextType {
    isShown: boolean;
    openBurger: () => void;
    closeBurger: () => void;
    toggleBurger: () => void;
}

const DEFAULT_VALUE: BurgerContextType = {
    isShown: false,
    openBurger: () => {},
    closeBurger: () => {},
    toggleBurger: () => {},
};

export const BurgerContext = createContext<BurgerContextType>(DEFAULT_VALUE);

interface ProviderProps {
    children: ReactNode;
}

export const BurgerContextProvider = ({ children }: ProviderProps) => {
    const [isShown, setIsShown] = useState<boolean>(false);

    useEffect(() => {
        document.body.style.overflow = isShown ? 'hidden' : '';
    }, [isShown]);

    const openBurger = () => {
        setIsShown(true);
    };

    const closeBurger = () => {
        setIsShown(false);
    };

    const toggleBurger = () => {
        setIsShown((previousValue) => !previousValue);
    };

    return <BurgerContext.Provider value={{ isShown, openBurger, closeBurger, toggleBurger }}>{children}</BurgerContext.Provider>;
};
