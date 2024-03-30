import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import { type StateScheme } from '../config/StateScheme'

interface StoreProviderProps {
  children: React.ReactNode
  initialState?: Partial<StateScheme> // используется для тестов
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState } = props

  const store = createReduxStore(initialState as StateScheme)

  return <Provider store={store}>{children}</Provider>
}
