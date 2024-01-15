import { ChangeEvent, useRef } from 'react'

import EditIcon from '../../assets/icons/Edit.tsx'
import { useAppDispatch } from '../../store/store.ts'
import c from '../changeNameForm/changeNameForm.module.scss'
import {appActions} from "../../state/appReducer/appReducer.ts";
// import { useAppDispatch } from '../../store/store.ts'

type InputFileType = {
  callback: (data: FormData) => void
}

export const InputFile = ({ callback }: InputFileType) => {
  // const dispatch = useAppDispatch()
  const dispatch = useAppDispatch()
  const inputRef = useRef<HTMLInputElement>(null)
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

  // file validation
  const isValidFile = (file: File) => {
    const allowedTypes = ['image/jpeg', 'image/png']
    const maxSize = 1024 * 1024 // 1 MB

    return allowedTypes.includes(file.type) && file.size <= maxSize
  }

  const uploadHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData()
    const file = e.target.files![0]

    if (file && isValidFile(file)) {
      formData.append('avatar', file)
      await callback(formData)
    } else {
      dispatch(appActions.setMessage({ message: 'Chose valid picture' }))
    }
  }

  return (
    <div className={c.editWrapper}>
      <EditIcon onClick={selectFileHandler} />
      <input style={{ display: 'none' }} ref={inputRef} type="file" onChange={uploadHandler} />
    </div>
  )
}
