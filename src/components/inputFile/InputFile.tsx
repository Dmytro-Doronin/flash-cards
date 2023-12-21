import { ChangeEvent, useRef, useState } from 'react'

import EditIcon from '../../assets/icons/Edit.tsx'
import { profileType } from '../../services/profileService/profileService.types.ts'

type InputFileType = {
  changeUserDataHandler?: ({ avatar, name, email }: profileType) => Promise<void>
}

export const InputFile = ({ changeUserDataHandler }: InputFileType) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [avatare, setAvatar] = useState('')
  const selectFileHandler = () => {
    inputRef && inputRef.current?.click()
  }

  const postAvatar = async (file: File) => {
    const formData = new FormData()

    formData.append('avatar', file)
    formData.append('name', 'loh')
    if (changeUserDataHandler) {
      await changeUserDataHandler(formData)
    }
  }

  const convertFileToBase64 = (file: File, callback: (value: string) => void) => {
    const reader = new FileReader()

    reader.onloadend = () => {
      const file64 = reader.result as string

      callback(file64)
    }
    reader.readAsDataURL(file)
  }



  const uploadHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]

      await postAvatar(file)
      // await convertFileToBase64(file, (file64: string) => {
      //   setAvatar(file64)
      //   if (changeUserDataHandler) {
      //     const formData = new FormData()
      //
      //     formData.append('avatar', file)
      //      changeUserDataHandler(formData)
      //   }
      // })
    }
  }


  return (
    <>
      <EditIcon onClick={selectFileHandler} />
      <input style={{ display: 'none' }} ref={inputRef} type="file" onChange={uploadHandler} />
    </>
  )
}
