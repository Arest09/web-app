import { classNames } from '@/shared/lib'
import cls from './Navbar.module.scss'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { LangSwitcher } from '@/features/LangeSwitcher'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from '@/shared/ui/Buttton/Button'
import { useCallback, useState } from 'react'
import { LoginModal } from '@/features/AuthByUserName'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userAction } from '@/entities/User'

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)
  const authData = useSelector(getUserAuthData)
  const dispatch = useDispatch()

  const onClose = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onOpen = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  const onLogout = () => {
    dispatch(userAction.logout())
  }

  if (authData) {
    return (
      <div className={classNames(cls.Navbar, { second: false }, [className])}>
        <div className={cls.navbarItem}>
          <ThemeSwitcher />
          <LangSwitcher className={cls.langSwitcher} />
        </div>
        <Button onClick={onLogout} theme={ButtonTheme.CLEAR}>
          {t('Выйти')}
        </Button>
      </div>
    )
  }

  return (
    <div className={classNames(cls.Navbar, { second: false }, [className])}>
      <div className={cls.navbarItem}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.langSwitcher} />
      </div>
      <Button onClick={onOpen} theme={ButtonTheme.CLEAR}>
        {t('войти')}
      </Button>
      <LoginModal onClose={onClose} isOpen={isAuthModal} className={cls.LoginModal} width="500px" />
    </div>
  )
}
