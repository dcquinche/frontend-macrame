import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const initialState = {
  product: {},
}

export const getProductById = createAsyncThunk('products/getProductById', async (id) => {
  const response = await fetch(`${BASE_URL}/api/products/${id}`);
  const data = await response.json();
  return data;
});

const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  }
})

export default productSlice.reducer;
