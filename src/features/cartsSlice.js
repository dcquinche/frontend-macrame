import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const initialState = {
  carts: []
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

export const updateCart = createAsyncThunk('carts/updateCart', async (cart) => {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cart),
  };

  const response = await fetch(`${BASE_URL}/api/carts/${cart._id}`, options);
  const data = await response.json();
  return data;
});

export const deleteCart = createAsyncThunk('carts/deleteCart', async (id) => {
  const options = {
    method: 'DELETE',
  };

  const response = await fetch(`${BASE_URL}/api/carts/${id}`, options);
  const data = await response.json();
  return data;
});

export const getCartByUser = createAsyncThunk('carts/getCartByUser', async (cart) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cart),
  };
  const response = await fetch(`${BASE_URL}/api/carts/filter`, options);
  const data = await response.json();
  return data;
});

const cartsSlice = createSlice({
  name: 'carts',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createCart.fulfilled, (state, action) => {
      state.carts = action.payload;
    });
    builder.addCase(updateCart.fulfilled, (state, action) => {
      state.carts = action.payload;
    });
    builder.addCase(deleteCart.fulfilled, (state, action) => {
      state.carts = action.payload;
    });
    builder.addCase(getCartByUser.fulfilled, (state, action) => {
      state.carts = action.payload;
    });
  }
})

export default cartsSlice.reducer;
