import { counterAction, counterReducer } from './CounterSlice'
import { type CounterScheme } from '../types/CounterScheme'

describe('getCounterValue', () => {
  test('decrement', () => {
    const state: CounterScheme = {
      value: 10,
    }
    expect(counterReducer(state, counterAction.decrement())).toEqual({ value: 9 })
  })
  test('increment', () => {
    const state: CounterScheme = {
      value: 10,
    }
    expect(counterReducer(state, counterAction.increment())).toEqual({ value: 11 })
  })

  test('should work with empty state', () => {
    expect(counterReducer(undefined, counterAction.increment())).toEqual({ value: 1 })
  })
})
