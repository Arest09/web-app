import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type StateScheme } from './StateScheme'
import { counterReducer } from '@/entities/Counter'
import { userReducer } from '@/entities/User'
import { LoginReducer } from '@/features/AuthByUserName'

export const createReduxStore = (initialState?: StateScheme) => {
  const rootReducer: ReducersMapObject<StateScheme> = {
    counter: counterReducer,
    user: userReducer,
    login: LoginReducer,
  }

  return configureStore<StateScheme>({
    reducer: rootReducer,
    devTools: __IS__DEV,
    preloadedState: initialState,
  })
}
