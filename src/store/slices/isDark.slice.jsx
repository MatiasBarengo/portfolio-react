import { createSlice } from '@reduxjs/toolkit';

export const isDarkSlice = createSlice({
  name: 'isDark',
  initialState: true,
  reducers: {
    change: (state) => {
      return !state
    }
  }
})

export const { change } = isDarkSlice.actions;

export default isDarkSlice.reducer;
