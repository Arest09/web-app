import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import { type StateScheme } from '../config/StateScheme'
import { type ReducersMapObject } from '@reduxjs/toolkit'

interface StoreProviderProps {
  children: React.ReactNode
  initialState?: Partial<StateScheme> // используется для тестов
  asyncReducers?: Partial<ReducersMapObject<StateScheme>>
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState, asyncReducers } = props

  const store = createReduxStore(initialState as StateScheme, asyncReducers as ReducersMapObject<StateScheme>)

  return <Provider store={store}>{children}</Provider>
}
