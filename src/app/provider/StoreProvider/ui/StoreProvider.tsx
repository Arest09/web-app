import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import { type StateScheme } from '../config/StateScheme'

interface StoreProviderProps {
  children: React.ReactNode
  initialState?: StateScheme
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState } = props

  const store = createReduxStore(initialState)

  return <Provider store={store}>{children}</Provider>
}
