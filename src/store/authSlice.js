import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    users: []
  },
  reducers: {
    login: (state, action) => {
      // search user with inputed email
      const foundUser = state.users.find(user => user.email === action.payload.email && user.password === action.payload.password);

      // if email and password are same, set `isLoggedIn` value to true
      if (foundUser) {
        state.isLoggedIn = true;
      } else {
        state.isLoggedIn = false;
      }
    },
    register: (state, action) => {
      // add email and password object to users
      state.users.push(action.payload)

      state.isLoggedIn = true;
    },
    logout: state => {
      state.isLoggedIn = false
    }
  }
})

export const { login, register, logout } = authSlice.actions

export default authSlice.reducer