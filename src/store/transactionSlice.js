import { createSlice } from '@reduxjs/toolkit';

import { balance, transactions } from '../__mock';

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState: {
    balance: 0,
    transactions: [],
  },
  reducers: {
    getBalance: state => {
      state.balance = balance;
    },
    getTransactions: state => {
      state.transactions = transactions;
    },
    deposit: (state, action) => {
      console.log('deposit: ', action);
      state.transactions = [
        {
          date: Date.now(),
          amount: action.payload.amount,
          toAddress: '0xmyaddress',
          fromAddress: action.payload.fromAddress,
          status: 'pending',
        },
        ...state.transactions,
      ];
    },
    transfer: (state, action) => {
      state.transactions = [
        {
          date: Date.now(),
          amount: action.payload.amount,
          toAddress: action.payload.toAddress,
          fromAddress: '0xmyaddress',
          status: 'pending',
        },
        ...state.transactions,
      ];
    },
  },
});

export const { getBalance, getTransactions, deposit, transfer } =
  transactionSlice.actions;

export default transactionSlice.reducer;
