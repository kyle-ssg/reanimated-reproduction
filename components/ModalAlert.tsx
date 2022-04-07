import { Modal, ModalBody, ModalFooter, ModalHeader } from './Modal'
import { FC, ReactNode } from 'react'
import Button, { ButtonPrimary } from 'components/base/forms/Button'

interface ModalAlert {
  okText?: string
  title?: ReactNode
  isOpen?: boolean
  onDismiss?: () => void
  toggle?: () => void
}

const ModalAlert: FC<ModalAlert> = ({
  onDismiss,
  toggle,
  children,
  title,
  isOpen,
  okText = 'ok',
}) => {
  const onDissmissClick = () => {
    if (onDismiss) {
      onDismiss()
    }
    toggle?.()
  }
  return (
    <Modal unmountOnClose isOpen={isOpen} toggle={onDissmissClick}>
      <ModalHeader toggle={onDissmissClick}>{title}</ModalHeader>
      <ModalBody>{children}</ModalBody>
      <ModalFooter>
        <ButtonPrimary onClick={onDissmissClick}>{okText}</ButtonPrimary>
      </ModalFooter>
    </Modal>
  )
}

ModalAlert.displayName = 'ModalAlert'
export default ModalAlert
