import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type StateScheme } from './StateScheme'
import { counterReducer } from '@/entities/Counter'
import { userReducer } from '@/entities/User'
import { createReducerManager } from './reducerManager'

export const createReduxStore = (
  initialState?: StateScheme,
  asyncReducers?: ReducersMapObject<StateScheme>, // NOTE:добавил для storybook
) => {
  const rootReducer: ReducersMapObject<StateScheme> = {
    counter: counterReducer,
    user: userReducer,
    ...asyncReducers,
  }
  const reducerManager = createReducerManager(rootReducer)

  const store = configureStore<StateScheme>({
    reducer: reducerManager.reduce, // был rootReducer
    devTools: __IS__DEV,
    preloadedState: initialState,
  })

  // @ts-expect-error  //NOTE:временно
  store.reducerManager = reducerManager

  return store
}
