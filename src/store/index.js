import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './slices/bookSlice';

export default configureStore({
  reducer: {
    book: bookReducer
  }
});
