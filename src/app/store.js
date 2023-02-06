import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/productsSlice';
import productReducer from '../features/productSlice';
import usersReducer from '../features/usersSlice';
import cartsReducer from '../features/cartsSlice';
import uploadsReducer from '../features/uploadsSlice';
import searchReducer from '../features/searchSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    product: productReducer,
    users: usersReducer,
    carts: cartsReducer,
    uploads: uploadsReducer,
    search: searchReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export default store;
