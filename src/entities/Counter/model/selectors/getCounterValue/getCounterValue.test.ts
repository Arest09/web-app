import { type StateScheme } from '@/app/provider/StoreProvider'
import { getCounterValue } from './getCounterValue'

describe('getCounterValue', () => {
  test('should return counter value', () => {
    const state: StateScheme = {
      counter: {
        value: 10,
      },
    }
    expect(getCounterValue(state)).toEqual(10)
  })
})
