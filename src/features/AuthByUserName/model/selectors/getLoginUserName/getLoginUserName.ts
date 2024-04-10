import { type StateScheme } from '@/app/provider/StoreProvider'

export const getLoginUserName = (state: StateScheme) => state.login?.username
