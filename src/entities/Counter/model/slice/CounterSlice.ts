import { createSlice } from '@reduxjs/toolkit'
import { type CounterScheme } from '../types/CounterScheme'

const initialState: CounterScheme = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  },
})

export const { actions: counterAction, reducer: counterReducer } = counterSlice
