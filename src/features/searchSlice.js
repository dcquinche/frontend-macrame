import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: ''
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    captureData: (state, action) => {
      state.search = action.payload;
    }
  }
})

export default searchSlice.reducer;
export const { captureData } = searchSlice.actions;
