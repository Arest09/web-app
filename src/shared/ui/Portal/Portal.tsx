import { createPortal } from 'react-dom'

interface PortalProps {
  children: React.ReactNode
  container?: HTMLElement
}

export function Portal(props: PortalProps) {
  const { children, container = document.body } = props
  return container ? createPortal(children, container) : children
}
