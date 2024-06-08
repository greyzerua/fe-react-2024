import type { ReactNode } from 'react';
import { createContext, useState } from 'react';

import { getSelectedProductsCount } from '@/utils/get-selected-products-count';

interface CartCountContextType {
    count: number;
    updateCount: () => void;
}

const DEFAULT_VALUE: CartCountContextType = {
    count: 0,
    updateCount: () => {},
};

export const CartCountContext = createContext<CartCountContextType>(DEFAULT_VALUE);

interface ProviderProps {
    children: ReactNode;
}

export const CartCountContextProvider = ({ children }: ProviderProps) => {
    const [count, setCount] = useState<number>(getSelectedProductsCount());

    const updateCount = () => {
        setCount(getSelectedProductsCount());
    };

    return <CartCountContext.Provider value={{ count, updateCount }}>{children}</CartCountContext.Provider>;
};
