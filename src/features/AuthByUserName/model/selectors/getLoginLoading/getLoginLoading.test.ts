import { type StateScheme } from '@/app/provider/StoreProvider'
import { type DeepPartial } from '@/shared/lib'
import { getLoginLoading } from './getLoginLoading'

test('getLoginLoading-selector', () => {
  const state: DeepPartial<StateScheme> = {
    login: {
      isLoading: true,
    },
  }
  expect(getLoginLoading(state as StateScheme)).toEqual(true)
})
