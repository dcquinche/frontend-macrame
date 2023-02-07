import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  save: ''
}

const saveSlice = createSlice({
  name: 'save',
  initialState,
  reducers: {
    captureData: (state, action) => {
      state.save = action.payload;
    }
  }
})

export default saveSlice.reducer;
export const { captureData } = saveSlice.actions;
