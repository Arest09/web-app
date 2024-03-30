import { type StateScheme } from '@/app/provider/StoreProvider'
import { stat } from 'fs'

export const getLogin = (state: StateScheme) => state.login
