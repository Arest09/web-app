import { type StateScheme } from '@/app/provider/StoreProvider'

export const getLoginError = (state: StateScheme) => state.login?.error
