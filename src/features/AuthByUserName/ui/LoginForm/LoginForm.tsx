import { classNames } from '@/shared/lib'
import cls from './LoginForm.module.scss'
import { Button, ButtonTheme } from '@/shared/ui/Buttton/Button'
import { useTranslation } from 'react-i18next'
import { Input } from '@/shared/ui/Input/Input'
import { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoginAction, LoginReducer } from '../../model/slice/LoginSlice'
import { loginByUserName } from '../../model/services/loginByUserName'
import { Text, TextTheme } from '@/shared/ui/Text/Text'
import { getLoginUserName } from '../../model/selectors/getLoginUserName'
import { getLoginPassword } from '../../model/selectors/getLoginPassword'
import { getLoginLoading } from '../../model/selectors/getLoginLoading'
import { getLoginError } from '../../model/selectors/getLoginError'
import { DynamicModuleLoader, type ReducerList } from '@/shared/lib/components/DynamicModuleLoader'

export interface LoginFormProps {
  className?: string
}

const initialReducers: ReducerList = {
  login: LoginReducer,
}

const LoginForm = memo((props: LoginFormProps) => {
  const { t } = useTranslation()
  const { className } = props

  const dispatch = useDispatch<any>()

  const username = useSelector(getLoginUserName)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginLoading)
  const error = useSelector(getLoginError)

  const onChangeUserName = useCallback(
    (value: string) => {
      dispatch(LoginAction.setUserName(value))
    },
    [dispatch],
  )

  const onChangeUserPassword = useCallback(
    (value: string) => {
      dispatch(LoginAction.setPassword(value))
    },
    [dispatch],
  )

  const onLoginClick = useCallback(() => {
    dispatch(loginByUserName({ username, password }))
  }, [dispatch, username, password])

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={classNames(cls.LoginForm, {}, [className])}>
        {error && <Text style={{ marginBottom: '20px' }} text={error} theme={TextTheme.ERROR} />}
        <Input
          onChange={onChangeUserName}
          value={username}
          className={cls.input}
          placeholder={t('введите email')}
          autoFocus
        />
        <Input
          onChange={onChangeUserPassword}
          value={password}
          className={cls.input}
          placeholder={t('введите пароль')}
        />
        <Button disabled={isLoading} onClick={onLoginClick} theme={ButtonTheme.OUTLINE}>
          {t('войти')}
        </Button>
      </div>
    </DynamicModuleLoader>
  )
})
export default LoginForm
