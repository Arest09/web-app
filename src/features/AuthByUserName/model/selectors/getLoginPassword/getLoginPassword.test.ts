import { type StateScheme } from '@/app/provider/StoreProvider'
import { type DeepPartial } from '@/shared/lib'
import { getLoginPassword } from './getLoginPassword'

test('getLoginLoading-selector', () => {
  const state: DeepPartial<StateScheme> = {
    login: {
      password: '123123',
    },
  }
  expect(getLoginPassword(state as StateScheme)).toEqual('123123')
})
