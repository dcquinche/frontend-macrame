import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/productsSlice';
import searchReducer from '../features/searchSlice';
import usersReducer from '../features/usersSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    users: usersReducer,
    search: searchReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export default store;
