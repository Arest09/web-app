import { classNames } from '@/shared/lib'
import cls from './SideBar.module.scss'
import { type PropsWithChildren, useState } from 'react'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Buttton/Button'
import { useTranslation } from 'react-i18next'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { routePath } from '@/shared/config'
import MainIcon from '@/shared/assets/icons/main.svg'
import AboutIcon from '@/shared/assets/icons/about.svg'

interface SideBarProps extends PropsWithChildren {
  className?: string
}

export function SideBar (props: SideBarProps) {
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation()

  const onToggle = () => {
    setCollapsed(!collapsed)
  }

  const { className } = props
  return (
      <div
        data-testid='sidebar'
        className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}>
          <div className={cls.links}>
              <AppLink
                className={classNames(cls.linkItem, { [cls.collapsedLink]: collapsed })}
                to={routePath.main}>
                  {collapsed ? <MainIcon /> : t('главная')}
              </AppLink>
              <AppLink
                className={classNames(cls.linkItem, { [cls.collapsedLink]: collapsed })}
                to={routePath.about}>
                  {collapsed ? <AboutIcon /> : t('о сайте')}
              </AppLink>
          </div>
          <Button
            data-testid='sidebar-toggle'
            square
            className={classNames(cls.toggle)}
            theme={ButtonTheme.BACKGROND_INVERTED}
            size={ButtonSize.L}
            onClick={onToggle}>
              {collapsed ? '>' : '<'}
          </Button>
      </div>
  )
}
