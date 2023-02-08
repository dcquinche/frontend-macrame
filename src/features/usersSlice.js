import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const initialState = {
  users: []
}

export const createUser = createAsyncThunk('users/createUser', async (user) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };
  const response = await fetch(`${BASE_URL}/api/users`, options);
  const data = await response.json();
  return data;
});

export const updateUser = createAsyncThunk('users/updateUser', async (user) => {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };

  const response = await fetch(`${BASE_URL}/api/users/${user._id}`, options);
  const data = await response.json();
  return data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  }
})

export default usersSlice.reducer;
