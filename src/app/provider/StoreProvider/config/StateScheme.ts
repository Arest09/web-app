import { type CounterScheme } from '@/entities/Counter'
import { type UserScheme } from '@/entities/User'
import { type LoginScheme } from '@/features/AuthByUserName'
import { type Reducer, type ReducersMapObject, type UnknownAction, type EnhancedStore } from '@reduxjs/toolkit'

export interface StateScheme {
  counter: CounterScheme
  user: UserScheme

  // Асинхронные редьюсеры
  login?: LoginScheme
}

export type StateSchemeKey = keyof StateScheme

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateScheme>
  reduce: (state: StateScheme, action: UnknownAction) => StateScheme
  add: (key: StateSchemeKey, reducer: Reducer) => void
  remove: (key: StateSchemeKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateScheme> {
  reducerManager: ReducerManager
}
