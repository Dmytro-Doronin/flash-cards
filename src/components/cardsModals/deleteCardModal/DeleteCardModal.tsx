import { ModalDialog, ModalDialogType } from '../../modalDialog/ModalDialog.tsx'

import c from './deleteCardModel.module.scss'

type DeleteCardModalType = Pick<ModalDialogType, 'onCancel' | 'onOpenChange' | 'open'> & {
  onConfirm: () => void
  cardName: string
}
export const DeleteCardModal = ({
  cardName,
  onConfirm,
  onCancel,
  open,
  onOpenChange,
}: DeleteCardModalType) => {
  return (
    <ModalDialog
      title="Delete Card"
      cancelText="Cancel"
      confirmText="Delete Card"
      onOpenChange={onOpenChange}
      open={open}
      onConfirm={onConfirm}
      onCancel={onCancel}
    >
      <div className={c.text}>Do you really want to remove {cardName}?</div>
    </ModalDialog>
  )
}
