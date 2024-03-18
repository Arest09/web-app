import { type StateScheme } from '@/app/provider/StoreProvider'
import { getCounter } from './getCounter'

describe('getCounter', () => {
  test('should return counetr value', () => {
    const state: StateScheme = {
      counter: {
        value: 10,
      },
    }
    expect(getCounter(state)).toEqual({ value: 10 })
  })
})
