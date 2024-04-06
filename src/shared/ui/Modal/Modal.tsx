import { classNames } from '@/shared/lib'
import cls from './Modal.module.scss'
import { lazy, useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { Portal } from '../Portal/Portal'
import { useTheme } from '@/app/provider/ThemeProvider'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  container?: HTMLElement
  width?: string
  lazy?: boolean
}

export function Modal(props: ModalProps) {
  const { className, children, isOpen, onClose, container, width, lazy } = props

  const { theme } = useTheme()

  const [isClosing, setIsClosing] = useState(false)

  const timeRef = useRef<ReturnType<typeof setTimeout>>(null)

  const closeHanlder = () => {
    if (onClose) {
      setIsClosing(true)
      timeRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, 300)
    }
  }

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    },
    [onClose],
  )

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }
    return () => {
      clearTimeout(timeRef.current)
      window.removeEventListener('keydown', onkeydown)
    }
  }, [isOpen, onKeyDown])

  const onContentClick = (event: React.MouseEvent) => {
    event.stopPropagation()
  }

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  }

  if (lazy) {
    return null
  }

  return (
    <Portal container={container}>
      <div className={classNames(cls.Modal, mods, [className, theme])}>
        <div className={cls.overlay} onClick={closeHanlder}>
          <div className={cls.content} onClick={onContentClick} style={{ width }}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
