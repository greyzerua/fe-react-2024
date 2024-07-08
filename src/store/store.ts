import { configureStore } from '@reduxjs/toolkit';

import auth from './auth/slice';
import categories from './categories/slice';
import pagination from './pagination/slice';
import product from './product-details/slice';
import products from './products/slice';
import filter from './products-filter/slice';
import theme from './theme/slice';

export const store = configureStore({
    reducer: {
        theme,
        pagination,
        products,
        product,
        categories,
        filter,
        auth,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
