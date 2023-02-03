import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const initialState = {
  products: []
}

export const getAllProducts = createAsyncThunk('products/getAllProducts', async () => {
  const response = await fetch(`${BASE_URL}/api/products`);
  const data = await response.json();
  return data;
});

export const getProductById = createAsyncThunk('products/getProductById', async (id) => {
  const response = await fetch(`${BASE_URL}/api/products/${id}`);
  const data = await response.json();
  return data;
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  }
})

export default productsSlice.reducer;
