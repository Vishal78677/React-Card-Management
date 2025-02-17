import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cardReducer from "./slices/cardSlice";
import formReducer from "./slices/formModalSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
    card: cardReducer, 
    form: formReducer
  });


  const persistConfig = {
    key: 'card-root',
    storage, 
    whitelist: ['card'],
  };


  const persistedReducer = persistReducer(persistConfig, rootReducer);


  export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ['persist/PERSIST'],
        },
      }),
  });

  export const persistor = persistStore(store);


  export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;