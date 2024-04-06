import { type StateScheme } from '@/app/provider/StoreProvider'

export const getLoginLoading = (state: StateScheme) => state.login?.isLoading
