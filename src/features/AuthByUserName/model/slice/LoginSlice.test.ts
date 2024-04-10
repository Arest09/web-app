import { type LoginScheme } from '../types/LoginScheme'
import { type DeepPartial } from '@/shared/lib'
import { LoginAction, LoginReducer } from './LoginSlice'

describe('login slice', () => {
  test('setUserName', () => {
    const state: DeepPartial<LoginScheme> = {
      username: 'arest',
    }
    expect(LoginReducer(state as LoginScheme, LoginAction.setUserName('123'))).toEqual({ username: '123' })
  })
  test('setPassword', () => {
    const state: DeepPartial<LoginScheme> = {
      password: '123',
    }
    expect(LoginReducer(state as LoginScheme, LoginAction.setPassword('12345'))).toEqual({ password: '12345' })
  })
})
