import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import persistedReducer from '../config/persistConfig';
import rootSaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});
const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export { store, persistor };
