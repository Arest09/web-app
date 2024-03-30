import { type StateScheme } from '@/app/provider/StoreProvider'

export const getUserAuthData = (state: StateScheme) => state.user.authData
