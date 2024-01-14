import { configureStore } from '@reduxjs/toolkit';
import isLoggedReducer from '../features/login/index ';
export const store = configureStore({
    reducer: {
        isLogged: isLoggedReducer,
    },
});
