import { useParams } from 'react-router-dom'

import { AlertSnackbar } from '../../components/alertSnackbar/AlertSnackbar.tsx'
import { CreateNewPassword } from '../../components/auth/createNewPassword/CreateNewPassword.tsx'
import { Header } from '../../components/header/Header.tsx'
import { PasswordChanged } from '../../components/passwordWasChanged/PasswordChanged.tsx'
import { useNewPasswordMutation } from '../../services/auth/auth.service.ts'
import { NewPasswordType } from '../../services/auth/auth.types.ts'

import c from './newPasswordPage.module.scss'

export const NewPasswordPage = () => {
  const [setNewPassword, { isLoading, error: newPasswordError, isSuccess }] =
    useNewPasswordMutation()
  const { hash } = useParams()

  const createNewPasswordHandler = async (data: NewPasswordType) => {
    setNewPassword(data)
  }

  return (
    <div className={c.newPasswordPage}>
      <Header variant="login" />
      {isSuccess ? (
        <PasswordChanged />
      ) : (
        <CreateNewPassword
          hash={hash}
          isLoading={isLoading}
          createNewPasswordHandler={createNewPasswordHandler}
        />
      )}
      {newPasswordError && <AlertSnackbar variant="error" message={newPasswordError} />}
    </div>
  )
}
