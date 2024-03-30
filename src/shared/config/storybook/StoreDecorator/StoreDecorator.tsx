import { type StateScheme, StoreProvider } from '@/app/provider/StoreProvider'

export const StoreDecorator = (state: Partial<StateScheme>) => {
  // eslint-disable-next-line react/display-name
  return (Story: React.FC) => {
    return (
      <StoreProvider initialState={state}>
        <Story />
      </StoreProvider>
    )
  }
}
