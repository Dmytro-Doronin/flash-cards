import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'

import Picture from '../../../assets/icons/PictureIcon.tsx'
import { fileToImage } from '../../../utils/FileToImage.ts'
import { InputFile } from '../../inputFile/InputFile.tsx'
import { ModalDialog, ModalDialogType } from '../../modalDialog/ModalDialog.tsx'
import { Button } from '../../ui/button'
import { TextField } from '../../ui/textField'
import { Typography } from '../../ui/typography'

import { addCardModalSchema } from './addCardModal.validation.ts'
import { AddCardModalFormValues } from './addCardModalType.ts'
import c from './cardModal.module.scss'

// export type ConfirmType = AddDeckModalFormValues & { image?: File }

type CardModalType = Pick<ModalDialogType, 'onCancel' | 'onOpenChange' | 'open'> & {
  defaultValues?: AddCardModalFormValues
  onConfirm: (data: { id: string; FormData: FormData }) => void
  paramsId: string
  title?: string
}

export const CardModal = ({
  defaultValues = { question: '', answer: '' },
  onCancel,
  onConfirm,
  paramsId,
  title,
  ...restProps
}: CardModalType) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddCardModalFormValues>({
    defaultValues,
    resolver: zodResolver(addCardModalSchema),
  })
  const [modalImageQuestions, setModalImageQuestion] = useState<File | null>(null)
  const [modalImageAnswer, setModalImageAnswer] = useState<File | null>(null)
  const [modalPreviewQuestionImage, setModalPreviewQuestionImage] = useState('')
  const [modalPreviewAnswerImage, setModalPreviewAnswerImage] = useState('')

  const onSubmit = handleSubmit(data => {
    const formData = new FormData()

    formData.append('question', data.question)
    formData.append('answer', data.answer)
    if (modalImageQuestions) {
      formData.append('questionImg', modalImageQuestions)
    }
    if (modalImageAnswer) {
      formData.append('answerImg', modalImageAnswer)
    }

    onConfirm({ id: paramsId, FormData: formData })
    restProps.onOpenChange?.(false)
    setModalPreviewQuestionImage('')
    setModalPreviewAnswerImage('')
    reset()
  })

  const handleCancel = () => {
    reset()
    onCancel?.()
  }
  const setQuestionImageHandler = (img: File) => {
    fileToImage(img, setModalPreviewQuestionImage)
    setModalImageQuestion(img)
  }
  const setAnswerImageHandler = (img: File) => {
    fileToImage(img, setModalPreviewAnswerImage)
    setModalImageAnswer(img)
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
        <Typography variant="subtitle1">Question</Typography>
        <Controller
          render={({ field }) => (
            <TextField
              errorMessage={errors.question?.message}
              label={'Name'}
              type={'text'}
              {...field}
            />
          )}
          name={'question'}
          control={control}
          // defaultValue=""
        />
        <div className={c.inputFileWrapper}>
          {modalPreviewQuestionImage && (
            <div className={c.imgPreview}>
              <img className={c.img} src={modalPreviewQuestionImage} alt="img" />
            </div>
          )}
          <InputFile callback={setQuestionImageHandler}>
            <Button type="button" fullWidth variant="secondary">
              <Picture />
              Upload Image
            </Button>
          </InputFile>
        </div>
        <Typography variant="subtitle1">Answer</Typography>
        <Controller
          render={({ field }) => (
            <TextField
              errorMessage={errors.answer?.message}
              label={'Name'}
              type={'text'}
              {...field}
            />
          )}
          name={'answer'}
          control={control}
          // defaultValue=""
        />
        <div className={c.inputFileWrapper}>
          {modalPreviewAnswerImage && (
            <div className={c.imgPreview}>
              <img className={c.img} src={modalPreviewAnswerImage} alt="img" />
            </div>
          )}
          <InputFile callback={setAnswerImageHandler}>
            <Button type="button" fullWidth variant="secondary">
              <Picture />
              Upload Image
            </Button>
          </InputFile>
        </div>
      </form>
    </ModalDialog>
  )
}
