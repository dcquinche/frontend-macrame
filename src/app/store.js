import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/productsSlice';
import productReducer from '../features/productSlice';
import usersReducer from '../features/usersSlice';
import cartsReducer from '../features/cartsSlice';
import cartReducer from '../features/cartSlice';
import uploadsReducer from '../features/uploadsSlice';
import saveReducer from '../features/saveSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    product: productReducer,
    users: usersReducer,
    carts: cartsReducer,
    cart: cartReducer,
    uploads: uploadsReducer,
    save: saveReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export default store;
