import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type User, type UserScheme } from '../types/User'
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage'

const initialState: UserScheme = {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload
    },
    initAuthData: (state) => {
      const user = JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_KEY))
      if (user) {
        state.authData = user
      }
    },
    logout: (state) => {
      state.authData = undefined
      localStorage.removeItem(USER_LOCALSTORAGE_KEY)
    },
  },
})

export const { actions: userAction, reducer: userReducer } = userSlice
