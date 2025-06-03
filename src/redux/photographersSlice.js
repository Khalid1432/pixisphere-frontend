import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPhotographers = createAsyncThunk(
  'photographers/fetchPhotographers',
  async () => {
    const res = await axios.get('http://localhost:3001/photographers');
    return res.data;
  }
);

const photographersSlice = createSlice({
  name: 'photographers',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotographers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPhotographers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPhotographers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default photographersSlice.reducer;
