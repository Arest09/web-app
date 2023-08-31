import { classNames } from '@/shared/lib'
import cls from './SideBar.module.scss'
import { type PropsWithChildren, useState } from 'react'
import { Button, ButtonTheme } from '@/shared/ui/Buttton/Button'

interface SideBarProps extends PropsWithChildren {
  className?: string
}

export function SideBar (props: SideBarProps) {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed(!collapsed)
  }

  const { className } = props
  return (
      <div className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}>
          SideBar
          <Button className={classNames(cls.btn)} theme={ButtonTheme.PRIMARY} onClick={onToggle}>
              toggle
          </Button>
      </div>
  )
}
