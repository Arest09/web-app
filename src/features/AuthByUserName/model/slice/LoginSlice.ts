import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type LoginScheme } from '../types/LoginScheme'
import { loginByUserName } from '../services/loginByUserName'

const initialState: LoginScheme = {
  username: '',
  password: '',
  isLoading: false,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginByUserName.pending, (state, action) => {
      state.error = undefined
      state.isLoading = true
    })
    builder.addCase(loginByUserName.fulfilled, (state, action) => {
      state.isLoading = false
    })
    builder.addCase(loginByUserName.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  },
})

export const { actions: LoginAction, reducer: LoginReducer } = loginSlice
