import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'

import Eye from '../../../assets/icons/Eye.tsx'
import { InputFile } from '../../inputFile/InputFile.tsx'
import { ModalDialog, ModalDialogType } from '../../modalDialog/ModalDialog.tsx'
import { Button } from '../../ui/button'
import { ControlledCheckbox } from '../../ui/controlled'
import { TextField } from '../../ui/textField'

import c from './addDeckModal.module.scss'
import { addDeckModalSchema } from './addDeckModal.validation.ts'
import { AddDeckModalFormValues } from './addDeckModalType.ts'

export type ConfirmType = AddDeckModalFormValues & { image?: string }

type AddDeckModalType = Pick<ModalDialogType, 'onCancel' | 'onOpenChange' | 'open'> & {
  defaultValues?: AddDeckModalFormValues
  onConfirm: (data: ConfirmType) => void
}

export const AddDeckModal = ({
  defaultValues = { isPrivate: false, name: '' },
  onCancel,
  onConfirm,
  ...restProps
}: AddDeckModalType) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddDeckModalFormValues>({
    defaultValues,
    resolver: zodResolver(addDeckModalSchema),
  })
  const [modalImage, setModalImage] = useState()

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
      cancelText="Cancel"
      confirmText="Add New Pack"
    >
      <form className={c.form} onSubmit={onSubmit}>
        <Controller
          render={({ field }) => (
            <TextField
              errorMessage={errors.name?.message}
              label={'Name Pack'}
              type={'text'}
              {...field}
            />
          )}
          name={'name'}
          control={control}
          // defaultValue=""
        />
        <InputFile>
          <Button type="button" fullWidth variant="secondary">
            <Eye />
            Upload Image
          </Button>
        </InputFile>

        <ControlledCheckbox name={'isPrivate'} control={control} label={'Private Pack'} />
      </form>
    </ModalDialog>
  )
}
