import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { productSlice } from "../features/ProductSlice";

// Persist config
const persistProductConfig = {
  key: 'product',
  storage,
};

// Persisted reducer for product
const persistedProductReducer = persistReducer(persistProductConfig, productSlice.reducer);

export const store = configureStore({
  reducer: {
    product: persistedProductReducer,
    // basket: persistedBasketReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false });
  }
});

export const persistor = persistStore(store);
