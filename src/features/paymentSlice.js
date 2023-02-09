import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const initialState = {
  payment: {},
}

export const createPayment = createAsyncThunk('payments/createPayment', async (payment) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payment),
  };
  const response = await fetch(`${BASE_URL}/api/payments/order`, options);
  const data = await response.json();
  return data;
});

export const getPaymentByUser = createAsyncThunk('payments/getPaymentByUser', async (payment) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payment),
  };
  const response = await fetch(`${BASE_URL}/api/payments/filter`, options);
  const data = await response.json();
  return data;
});

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createPayment.fulfilled, (state, action) => {
      state.payment = action.payload;
    });
    builder.addCase(getPaymentByUser.fulfilled, (state, action) => {
      state.payment = action.payload;
    });
  }
})

export default paymentSlice.reducer;
