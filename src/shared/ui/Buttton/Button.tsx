import { classNames } from '@/shared/lib'
import { type PropsWithChildren } from 'react'
import cls from './Button.module.scss'

export enum ButtonTheme {
  PRIMARY = 'primary',
  OUTLINE = 'outline',
  CLEAR = 'clear',
}

interface ButtonProps extends PropsWithChildren, React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
}

export const Button = (props: ButtonProps) => {
  const { className, children, theme = ButtonTheme.PRIMARY, ...otherProps } = props

  return (
      <button className={classNames(cls.Button, {}, [className, cls[theme]])} {...otherProps}>
          {children}
      </button>
  )
}
