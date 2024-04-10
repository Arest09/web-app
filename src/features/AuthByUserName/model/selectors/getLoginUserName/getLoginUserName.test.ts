import { type StateScheme } from '@/app/provider/StoreProvider'
import { type DeepPartial } from '@/shared/lib'
import { getLoginUserName } from './getLoginUserName'

test('getLoginLoading-selector', () => {
  const state: DeepPartial<StateScheme> = {
    login: {
      username: 'user',
    },
  }
  expect(getLoginUserName(state as StateScheme)).toEqual('user')
})
