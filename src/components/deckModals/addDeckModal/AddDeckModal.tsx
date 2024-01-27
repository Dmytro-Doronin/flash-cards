import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { ModalDialog, ModalDialogType } from '../../modalDialog/ModalDialog.tsx'

import { addDeckModalSchema } from './addDeckModal.validation.ts'
import { AddDeckModalFormValues } from './addDeckModalType.ts'

type AddDeckModalType = Pick<ModalDialogType, 'onCancel' | 'onOpenChange' | 'open'> & {
  defaultValues?: AddDeckModalFormValues
  onConfirm: (data: AddDeckModalFormValues) => void
}

export const AddDeckModal = ({
  defaultValues = { isPrivate: false, name: '' },
  onCancel,
  onConfirm,
  ...restProps
}: AddDeckModalType) => {
  const { control, handleSubmit, reset } = useForm<AddDeckModalFormValues>({
    defaultValues,
    resolver: zodResolver(addDeckModalSchema),
  })

  const onSubmit = handleSubmit(data => {
    onConfirm(data)
    restProps.onOpenChange?.(false)
    reset()
  })

  const handleCancel = () => {
    reset()
    onCancel?.()
  }

  return (
    <ModalDialog
      {...restProps}
      onCancel={handleCancel}
      onConfirm={onSubmit}
      title={'Create new deck'}
    >
      <form onSubmit={onSubmit}>asdadf</form>
    </ModalDialog>
  )
}
