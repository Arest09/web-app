import { classNames } from '@/shared/lib'
import cls from './Text.module.scss'

export const enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
  style: React.CSSProperties
}

export function Text(props: TextProps) {
  const { className, text, title, theme = TextTheme.PRIMARY, style, ...otherProps } = props
  return (
    <div
      className={classNames(cls.Wrapper, {}, [className, cls[theme]])}
      {...otherProps}
      style={style}
    >
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  )
}
