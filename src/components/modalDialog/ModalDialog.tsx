import { Button } from '../ui/button'
import { Modal, ModalType } from '../ui/modal/Modal.tsx'

import c from './modalDialog.module.scss'
export type ModalDialogType = ModalType & {
  cancelText?: string
  confirmText?: string
  onCancel: () => void
  onConfirm: () => void
}

export const ModalDialog = ({
  cancelText = 'cancel',
  confirmText = 'submit',
  children,
  onConfirm,
  onCancel,
  ...restProps
}: ModalDialogType) => {
  return (
    <Modal {...restProps}>
      {children}
      <div className={c.buttonsWrapper}>
        <Button variant="secondary" onClick={onCancel}>
          {cancelText}
        </Button>
        <Button onClick={onConfirm}>{confirmText}</Button>
      </div>
    </Modal>
  )
}
