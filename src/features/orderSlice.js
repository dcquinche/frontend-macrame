import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const initialState = {
  order: [],
}

export const createOrder = createAsyncThunk('orders/createOrder', async (order) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  };
  const response = await fetch(`${BASE_URL}/api/orders`, options);
  const data = await response.json();
  return data;
});

export const getOrdersByUser = createAsyncThunk('orders/getOrdersByUser', async (order) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  };
  const response = await fetch(`${BASE_URL}/api/orders/filter`, options);
  const data = await response.json();
  return data;
});

const orderSlice = createSlice({
  name: 'order',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createOrder.fulfilled, (state, action) => {
      state.order = action.payload;
    });
    builder.addCase(getOrdersByUser.fulfilled, (state, action) => {
      state.order = action.payload;
    });
  }
})

export default orderSlice.reducer;
