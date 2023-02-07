import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const initialState = {
  cart: {},
}

export const createCart = createAsyncThunk('carts/createCart', async (cart) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cart),
  };
  const response = await fetch(`${BASE_URL}/api/carts`, options);
  const data = await response.json();
  return data;
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createCart.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
  }
})

export default cartSlice.reducer;
