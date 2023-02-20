import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const initialState = {
  products: [],
}

export const getAllProducts = createAsyncThunk('products/getAllProducts', async () => {
  const response = await fetch(`${BASE_URL}/api/products`);
  const data = await response.json();
  return data;
});

export const updateProduct = createAsyncThunk('products/updateProduct', async (product) => {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  };

  const response = await fetch(`${BASE_URL}/api/products/${product._id}`, options);
  const data = await response.json();
  return data;
});

export const deleteProduct = createAsyncThunk('products/deleteProduct', async (id) => {
  const options = {
    method: 'DELETE',
  };

  await fetch(`${BASE_URL}/api/products/${id}`, options);
  return id;
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      const { products } = current(state);
      const productsUpdated = products.map((product) => {
        if (product._id === action.payload._id) {
          return { ...product, ...action.payload };
        }
        return product;
      });
      state.products = productsUpdated;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      const { products } = current(state);
      state.products = products.filter((product) => product._id !== action.payload);
    });
  }
})

export default productsSlice.reducer;
