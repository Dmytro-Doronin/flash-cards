import { ModalDialog, ModalDialogType } from '../../modalDialog/ModalDialog.tsx'

import c from './deleteDeckModel.module.scss'

type DeleteDeckModalType = Pick<ModalDialogType, 'onCancel' | 'onOpenChange' | 'open'> & {
  onConfirm: () => void
  deckName: string
}
export const DeleteDeckModal = ({
  deckName,
  onConfirm,
  onCancel,
  open,
  onOpenChange,
}: DeleteDeckModalType) => {
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
      <div className={c.text}>
        Do you really want to remove {deckName}? All cards will be deleted.
      </div>
    </ModalDialog>
  )
}
