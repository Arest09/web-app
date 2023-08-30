import { classNames } from '@/shared/lib'
import cls from './Navbar.module.scss'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { LangSwitcher } from '@/features/LangeSwitcher'

interface NavbarProps {
  className?: string
}

export function Navbar ({ className }: NavbarProps) {
  return (
      <div className={classNames(cls.Navbar, { second: false }, [className])}>
          <div className={cls.links}>
              <AppLink className={classNames(cls.linkItem)} to={'/main'}>
                  главная
              </AppLink>
              <AppLink className={classNames(cls.linkItem)} to={'/about'}>
                  о сайте
              </AppLink>
          </div>
          <ThemeSwitcher />
          <LangSwitcher className={cls.langSwitcher} />
      </div>
  )
}
