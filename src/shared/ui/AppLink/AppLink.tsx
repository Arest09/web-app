import { classNames } from '@/shared/lib'
import cls from './AppLink.module.scss'
import { type FC, type PropsWithChildren } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps, PropsWithChildren {
  className?: string
  theme?: AppLinkTheme
}

// { children, className }:AppLinkProps либо так
export const AppLink: FC<AppLinkProps> = (props) => {
  const { children, className, to, theme = AppLinkTheme.PRIMARY, ...otherProps } = props
  return (
    <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
      {children}
    </Link>
  )
}
