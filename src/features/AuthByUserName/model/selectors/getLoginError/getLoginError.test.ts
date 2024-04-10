import { type StateScheme } from '@/app/provider/StoreProvider'
import { type DeepPartial } from '@/shared/lib'
import { getLoginError } from './getLoginError'

test('getLoginError-selector', () => {
  const state: DeepPartial<StateScheme> = {
    login: {
      error: 'error',
    },
  }
  expect(getLoginError(state as StateScheme)).toEqual('error')
})
