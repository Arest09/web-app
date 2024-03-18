import { type StateScheme } from '@/app/provider/StoreProvider'

export const getCounter = (state: StateScheme) => state.counter
