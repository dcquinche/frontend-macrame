import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  products: [],
}

export const getAllProducts = createAsyncThunk('products/getAllProducts', async () => {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/products`);
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
  }
})

export default productsSlice.reducer;
