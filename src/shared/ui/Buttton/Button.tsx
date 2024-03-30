import { classNames } from '@/shared/lib'
import { type PropsWithChildren } from 'react'
import cls from './Button.module.scss'

export enum ButtonTheme {
  PRIMARY = 'primary',
  OUTLINE = 'outline',
  CLEAR = 'clear',
  BACKGROUND = 'background',
  BACKGROND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends PropsWithChildren, React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
  disabled?: boolean
}

export const Button = (props: ButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.PRIMARY,
    square,
    size,
    disabled,
    ...otherProps
  } = props

  const mods: Record<string, boolean> = {
    [cls.square]: square,
    [cls.disabled]: disabled,
  }

  return (
    <button
      className={classNames(cls.Button, { ...mods }, [className, cls[theme], cls[size]])}
      {...otherProps}
    >
      {children}
    </button>
  )
}
