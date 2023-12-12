// import { applyMiddleware, Middleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk, { ThunkAction } from 'redux-thunk';
// import storage from 'redux-persist/lib/storage';
// import { persistStore, persistReducer } from 'redux-persist';
// import { configureStore, combineReducers, Action } from '@reduxjs/toolkit';
// import Carrito from './reducer';

// interface RootState {
//   LocalPersist: ReturnType<typeof rootReducer>;
// }

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const rootReducer = combineReducers({
//   LocalPersist: Carrito,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: [thunk as ThunkMiddleware, ...getDefaultMiddleware => getDefaultMiddleware()],
//   devTools: process.env.NODE_ENV !== 'production',
// });

// export const persistor = persistStore(store);

// // Typings for Thunk
// type ThunkActionType<R = void> = ThunkAction<R, RootState, null, Action<string>>;
// type ThunkMiddleware = Middleware<ThunkActionType>;
