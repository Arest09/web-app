import { classNames } from '@/shared/lib'
import cls from './Navbar.module.scss'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { LangSwitcher } from '@/features/LangeSwitcher'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from '@/shared/ui/Buttton/Button'
import { useCallback, useState } from 'react'
import { Modal } from '@/shared/ui/Modal/Modal'

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev)
  }, [])

  return (
    <div className={classNames(cls.Navbar, { second: false }, [className])}>
      <div className={cls.navbarItem}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.langSwitcher} />
      </div>
      <Button onClick={onToggleModal} theme={ButtonTheme.CLEAR}>
        {t('войти')}
      </Button>
      <Modal onClose={onToggleModal} isOpen={isAuthModal}>
        auth
      </Modal>
    </div>
  )
}
