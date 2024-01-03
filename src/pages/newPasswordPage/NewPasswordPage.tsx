import { useParams } from 'react-router-dom'

import { CreateNewPassword } from '../../components/auth/createNewPassword/CreateNewPassword.tsx'
import { Header } from '../../components/header/Header.tsx'
import { useNewPasswordMutation } from '../../services/auth/auth.service.ts'
import { NewPasswordType } from '../../services/auth/auth.types.ts'

import c from './newPasswordPage.module.scss'


export const NewPasswordPage = () => {
  const [setNewPassword, { isLoading }] = useNewPasswordMutation()
  const { hash } = useParams()

  const createNewPasswordHandler = async (data: NewPasswordType) => {
    try {
      await setNewPassword(data)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className={c.newPasswordPage}>
      <Header variant="login" />
      <CreateNewPassword
        hash={hash}
        isLoading={isLoading}
        createNewPasswordHandler={createNewPasswordHandler}
      />
    </div>
  )
}
