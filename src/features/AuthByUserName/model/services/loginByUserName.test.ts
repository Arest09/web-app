import axios from 'axios'
import { loginByUserName } from './loginByUserName'
import { type Dispatch } from '@reduxjs/toolkit'
import { type StateScheme } from '@/app/provider/StoreProvider'
import { userAction } from '@/entities/User'
import { TestAsyncThunk } from '@/shared/config/test/testAsyncThunk/testAsyncThunk'
jest.mock('axios')

describe('loginByUserName.test', () => {
  const user = { userName: '123', id: '1' }

  // let dispatch: Dispatch
  // let getState: () => StateScheme

  // beforeEach(() => {
  //   dispatch = jest.fn()
  //   getState = jest.fn()
  // })

  // test('fulfilled', async () => {
  //   const actionCreator = loginByUserName({ username: '123', password: '123' })
  //   ;(axios.post as jest.Mock).mockResolvedValue({ data: user })
  //   const action = await actionCreator(dispatch, getState, undefined)

  //   console.log(actionCreator)

  //   expect(axios.post as jest.Mock).toHaveBeenCalled()
  //   expect(dispatch).toHaveBeenCalledWith(userAction.setAuthData(user))
  //   expect(dispatch).toHaveBeenCalledTimes(3)
  //   expect(action.payload).toEqual(user)
  //   expect(action.meta.requestStatus).toBe('fulfilled')
  // })
  // test('rejected', async () => {
  //   const actionCreator = loginByUserName({ username: '123', password: '123' })
  //   ;(axios.post as jest.Mock).mockResolvedValue({})
  //   const action = await actionCreator(dispatch, getState, undefined)
  //   expect(dispatch).toHaveBeenCalledTimes(2)
  //   expect(action.meta.requestStatus).toBe('rejected')
  //   expect(action.payload).toBe('неверный логин или пароль')
  // })

  test('fulfilled', async () => {
    const thunk = new TestAsyncThunk(loginByUserName)
    ;(axios.post as jest.Mock).mockReturnValue({ data: user })
    const action = await thunk.callThunk({ username: '123', password: '123' })

    expect(axios.post as jest.Mock).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledWith(userAction.setAuthData(user))
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(action.payload).toEqual(user)
    expect(action.meta.requestStatus).toBe('fulfilled')
  })
  test('rejected', async () => {
    const thunk = new TestAsyncThunk(loginByUserName)
    ;(axios.post as jest.Mock).mockReturnValue({})
    const action = await thunk.callThunk({ username: '123', password: '123' })

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(action.meta.requestStatus).toBe('rejected')
    expect(action.payload).toBe('неверный логин или пароль')
  })
})
