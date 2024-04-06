import { classNames } from '@/shared/lib'
import { Modal } from '@/shared/ui/Modal/Modal'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'
import LoginForm from '../LoginForm/LoginForm'
import { Suspense } from 'react'
import { Loader } from '@/shared/ui/Loader/Loader'

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
  width?: string
}

export function LoginModal(props: LoginModalProps) {
  const { className, isOpen, onClose, width } = props
  return (
    <Modal className={classNames('', {}, [className])} isOpen={isOpen} onClose={onClose} width={width}>
      <Suspense fallback={<Loader />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  )
}
