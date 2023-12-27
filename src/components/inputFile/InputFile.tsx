import { ChangeEvent, useRef } from 'react'

import EditIcon from '../../assets/icons/Edit.tsx'
import { useAvatarUpdateMutation } from '../../services/profileService/profile.service.ts'
// import { profileType } from '../../services/profileService/profileService.types.ts'

export const InputFile = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [avatarUpdate] = useAvatarUpdateMutation()
  const selectFileHandler = () => {
    inputRef && inputRef.current?.click()
  }

  // const convertFileToBase64 = (file: File, callback: (value: string) => void) => {
  //   const reader = new FileReader()
  //
  //   reader.onloadend = () => {
  //     const file64 = reader.result as string
  //
  //     callback(file64)
  //   }
  //   reader.readAsDataURL(file)
  // }

  const uploadHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData()
    const file = e.target.files![0]

    formData.append('avatar', file)
    avatarUpdate(formData)
  }

  return (
    <>
      <EditIcon onClick={selectFileHandler} />
      <input style={{ display: 'none' }} ref={inputRef} type="file" onChange={uploadHandler} />
    </>
  )
}
