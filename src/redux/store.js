import { configureStore } from '@reduxjs/toolkit';
import photographersReducer from './photographersSlice';

const store = configureStore({
  reducer: {
    photographers: photographersReducer,
  },
});

export default store;
