import { classNames } from '@/shared/lib'
// import cls from './LoginModal.module.scss'
import { Modal } from '@/shared/ui/Modal/Modal'
import { LoginForm } from '../LoginForm/LoginForm'

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
  width?: string
}

export function LoginModal(props: LoginModalProps) {
  const { className, isOpen, onClose, width } = props
  return (
    <Modal
      className={classNames('', {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      width={width}
    >
      <LoginForm />
    </Modal>
  )
}
