import { userReducer, userAction } from './model/slice/UserSlice'
import { type UserScheme, type User } from './model/types/User'
import { getUserAuthData } from './model/selector/getUserAuthData'

export { userReducer, userAction, type UserScheme, type User, getUserAuthData }
