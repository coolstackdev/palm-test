import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import transactionSlice from './transactionSlice';

export default configureStore({
  reducer: {
    auth: authSlice,
    transaction: transactionSlice,
  }
})