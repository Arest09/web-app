import { type CounterScheme } from '@/entities/Counter'
import { type UserScheme } from '@/entities/User'
import { type LoginScheme } from '@/features/AuthByUserName'

export interface StateScheme {
  counter: CounterScheme
  user: UserScheme
  login: LoginScheme
}
