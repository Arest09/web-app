import { classNames } from '@/shared/lib'
import cls from './Input.module.scss'
import { memo, useEffect, useRef, useState } from 'react'

type HtmlInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HtmlInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void // переопределяем функцию из HtmlInputProps
  type?: string
  autoFocus?: boolean
}
export const Input = memo((props: InputProps) => {
  const { className, onChange, value, type = 'text', placeholder, autoFocus, ...otherProps } = props

  const [isFocused, setIsFocused] = useState(false)

  const ref = useRef<HTMLInputElement>(null)

  const onFocus = () => {
    setIsFocused(true)
  }
  const onBlur = () => {
    setIsFocused(false)
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  useEffect(() => {
    // FIXME:исправить автофокус
    if (autoFocus) {
      ref?.current?.focus()
      console.log(true)
      setIsFocused(true)
    }
  }, [autoFocus])

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])} onChange={onChangeHandler}>
      <label style={{ display: 'block', width: '100%' }}>
        <span className={classNames(cls.placeholder, { [cls.focus]: isFocused || value })}>{placeholder}</span>
        <input
          ref={ref}
          type={type}
          className={cls.Input}
          onFocus={onFocus}
          onBlur={onBlur}
          {...otherProps}
          value={value}
        />
      </label>
    </div>
  )
})
