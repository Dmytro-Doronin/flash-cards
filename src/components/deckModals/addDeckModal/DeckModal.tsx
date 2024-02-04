import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'

import Picture from '../../../assets/icons/PictureIcon.tsx'
import { fileToImage } from '../../../utils/FileToImage.ts'
import { InputFile } from '../../inputFile/InputFile.tsx'
import { ModalDialog, ModalDialogType } from '../../modalDialog/ModalDialog.tsx'
import { Button } from '../../ui/button'
import { ControlledCheckbox } from '../../ui/controlled'
import { TextField } from '../../ui/textField'

import { addDeckModalSchema } from './addDeckModal.validation.ts'
import { AddDeckModalFormValues } from './addDeckModalType.ts'
import c from './deckModal.module.scss'

// export type ConfirmType = AddDeckModalFormValues & { image?: File }

type AddDeckModalType = Pick<ModalDialogType, 'onCancel' | 'onOpenChange' | 'open'> & {
  defaultValues?: AddDeckModalFormValues
  onConfirm: (data: FormData) => void
  title?: string
}

export const DeckModal = ({
  defaultValues = { isPrivate: false, name: '' },
  onCancel,
  onConfirm,
  title,
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
  const [modalImage, setModalImage] = useState<File | null>(null)
  const [modalPreviewImage, setModalPreviewImage] = useState('')

  const onSubmit = handleSubmit(data => {
    const formData = new FormData()

    formData.append('name', data.name)
    formData.append('isPrivate', String(data.isPrivate))
    if (modalImage) {
      formData.append('cover', modalImage)
    }
    onConfirm(formData)
    restProps.onOpenChange?.(false)
    setModalPreviewImage('')
    reset()
  })

  const handleCancel = () => {
    reset()
    onCancel?.()
  }
  const setImageHandler = (img: File) => {
    fileToImage(img, setModalPreviewImage)
    setModalImage(img)
  }

  return (
    <ModalDialog
      {...restProps}
      onCancel={handleCancel}
      onConfirm={onSubmit}
      title={title}
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
        <div className={c.inputFileWrapper}>
          {modalPreviewImage && (
            <div className={c.imgPreview}>
              <img className={c.img} src={modalPreviewImage} alt="img" />
            </div>
          )}
          <InputFile callback={setImageHandler}>
            <Button type="button" fullWidth variant="secondary">
              <Picture />
              Upload Image
            </Button>
          </InputFile>
        </div>
        <ControlledCheckbox name={'isPrivate'} control={control} label={'Private Pack'} />
      </form>
    </ModalDialog>
  )
}
