import { userAction, type User } from '@/entities/User'
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface loginByUserNameProps {
  username: string
  password: string
}

export const loginByUserName = createAsyncThunk<
  User,
  loginByUserNameProps,
  { rejectValue: string }
>('login/loginByUserName', async (authData, thunkAPI) => {
  try {
    const response = await axios.post<User>('http://localhost:8000/login', authData)
    if (!response.data) {
      throw new Error()
    }
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
    thunkAPI.dispatch(userAction.setAuthData(response.data))
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue('неверный логин или пароль')
  }
})
