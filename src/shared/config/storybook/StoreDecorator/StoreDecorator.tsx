import { type StateScheme, StoreProvider } from '@/app/provider/StoreProvider'
import { LoginReducer } from '@/features/AuthByUserName/model/slice/LoginSlice'
import { type ReducersMapObject } from '@reduxjs/toolkit'

const defaultAsyncReducer: Partial<ReducersMapObject<StateScheme>> = {
  login: LoginReducer,
}

export const StoreDecorator = (state: Partial<StateScheme>) => {
  // eslint-disable-next-line react/display-name
  return (Story: React.FC) => {
    return (
      <StoreProvider initialState={state} asyncReducers={defaultAsyncReducer}>
        <Story />
      </StoreProvider>
    )
  }
}
