import { type StateScheme } from '@/app/provider/StoreProvider'
import { type AsyncThunkAction } from '@reduxjs/toolkit'

type ActionCreatorType<Return, Arg, RejectedValue> = (
  arg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>

export class TestAsyncThunk<Return, Arg, RejectValue> {
  dispatch: jest.MockedFn<any>
  getState: () => StateScheme
  actionCreator: ActionCreatorType<Return, Arg, RejectValue>

  constructor(actionCreator: ActionCreatorType<Return, Arg, RejectValue>) {
    this.actionCreator = actionCreator
    this.dispatch = jest.fn()
    this.getState = jest.fn()
  }

  async callThunk(arg: Arg) {
    const actionCreator = this.actionCreator(arg)
    const action = await actionCreator(this.dispatch, this.getState, undefined)

    return action
  }
}
