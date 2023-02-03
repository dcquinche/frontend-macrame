import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/productsSlice';
import searchReducer from '../features/searchSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    search: searchReducer,

  },
  devTools: process.env.NODE_ENV !== 'production',
})

export default store;
