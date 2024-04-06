import { type StateScheme } from '@/app/provider/StoreProvider'

export const getLoginPassword = (state: StateScheme) => state.login?.password
