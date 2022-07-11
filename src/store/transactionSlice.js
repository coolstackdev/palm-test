import { createSlice } from '@reduxjs/toolkit';

import { balance, transactions } from '../__mocks__';

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
      // Add transaction to transactionHistory
      state.transactions = [
        {
          date: Date.now(),
          amount: action.payload.amount,
          toAddress: '0xmyaddress',
          fromAddress: action.payload.fromAddress,
          status: 'Success',
        },
        ...state.transactions,
      ];

      // Update balance
      state.balance += Number(Number(action.payload.amount).toFixed(2));
    },
    transfer: (state, action) => {
      // Add transaction to transactionHistory
      state.transactions = [
        {
          date: Date.now(),
          amount: action.payload.amount,
          toAddress: action.payload.toAddress,
          fromAddress: '0xmyaddress',
          status: 'Success',
        },
        ...state.transactions,
      ];

      // Update balance
      state.balance -= Number(Number(action.payload.amount).toFixed(2));
    },
  },
});

export const { getBalance, getTransactions, deposit, transfer } =
  transactionSlice.actions;

export default transactionSlice.reducer;
