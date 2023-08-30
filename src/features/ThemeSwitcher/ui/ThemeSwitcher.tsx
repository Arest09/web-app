import { classNames } from '@/shared/lib'
import cls from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from '@/app/provider/ThemeProvider'
import Sun from '@/shared/assets/icons/sun-regular.svg'
import Moon from '@/shared/assets/icons/moon-solid.svg'
import { type CSSProperties } from 'react'
import { Button, ButtonTheme } from '@/shared/ui/Buttton/Button'

interface ThemeSwitcherProps {
  className?: string
}

const moonStyle: CSSProperties = {
  fill: 'rgb(196 187 24)'
}

const iconStyle: CSSProperties = {
  width: '30px'
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { className, ...otherProps } = props
  const { toggleTheme, theme } = useTheme()
  return (
      <Button
        theme={ButtonTheme.PRIMARY}
        className={classNames(cls.ThemeSwitcher, {}, [className])}
        onClick={toggleTheme}
        {...otherProps}>
          {theme === Theme.LIGHT
? (
    <Sun style={iconStyle} />
      )
: (
    <Moon style={{ ...moonStyle, ...iconStyle }} />
      )}
      </Button>
  )
}
