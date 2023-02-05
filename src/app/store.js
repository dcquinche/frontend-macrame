import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/productsSlice';
import searchReducer from '../features/searchSlice';
import usersReducer from '../features/usersSlice';
import uploadsReducer from '../features/uploadsSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    users: usersReducer,
    uploads: uploadsReducer,
    search: searchReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export default store;
