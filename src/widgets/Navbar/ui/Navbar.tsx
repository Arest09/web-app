import { classNames } from '@/shared/lib'
import cls from './Navbar.module.scss'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { LangSwitcher } from '@/features/LangeSwitcher'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export function Navbar ({ className }: NavbarProps) {
  const { t } = useTranslation()
  return (
      <div className={classNames(cls.Navbar, { second: false }, [className])}>
          <div className={cls.links}>
              <AppLink className={classNames(cls.linkItem)} to={'/'}>
                  {t('главная')}
              </AppLink>
              <AppLink className={classNames(cls.linkItem)} to={'/about'}>
                  {t('о сайте')}
              </AppLink>
          </div>
          <ThemeSwitcher />
          <LangSwitcher className={cls.langSwitcher} />
      </div>
  )
}
