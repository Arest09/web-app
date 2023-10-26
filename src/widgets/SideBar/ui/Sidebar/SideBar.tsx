import { classNames } from '@/shared/lib'
import cls from './SideBar.module.scss'
import { type PropsWithChildren, useState } from 'react'
import { Button, ButtonTheme } from '@/shared/ui/Buttton/Button'
import { useTranslation } from 'react-i18next'

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
        data-testid = 'sidebar'
        className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}>
          {'SideBar'}
          <Button data-testid = 'sidebar-toggle' className={classNames(cls.btn)}
            theme={ButtonTheme.PRIMARY} onClick={onToggle}>
              {t('переключатель')}
          </Button>
      </div>
  )
}
