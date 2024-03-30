import { classNames } from '@/shared/lib'
import cls from './LoginForm.module.scss'
import { Button, ButtonTheme } from '@/shared/ui/Buttton/Button'
import { useTranslation } from 'react-i18next'
import { Input } from '@/shared/ui/Input/Input'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoginAction } from '../../model/slice/LoginSlice'
import { getLogin } from '../../model/selectors/getLogin'
import { loginByUserName } from '../../model/services/loginByUserName'
import { Text, TextTheme } from '@/shared/ui/Text/Text'

interface LoginFormProps {
  className?: string
}

export function LoginForm(props: LoginFormProps) {
  const { t } = useTranslation()
  const { className } = props

  const dispatch = useDispatch<any>()

  const { username, password, isLoading, error } = useSelector(getLogin)

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
  )
}
