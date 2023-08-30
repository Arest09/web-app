import { classNames } from '@/shared/lib'
import { type FC, type PropsWithChildren } from 'react'
import cls from './Button.module.scss'

export enum ButtonTheme {
  PRIMARY = 'primary',
}

interface ButtonProps extends PropsWithChildren, React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme = ButtonTheme.PRIMARY, ...otherProps } = props

  return (
      <button className={classNames(cls.Button, {}, [className, cls[theme]])} {...otherProps}>
          {children}
      </button>
  )
}
