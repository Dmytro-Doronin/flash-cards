import { useState } from 'react'

import { CheckEmail } from '../../components/auth/checkEmail/CheckEmail.tsx'
import { RecoverPassword } from '../../components/auth/recoverPassword/RecoverPassword.tsx'
import { Header } from '../../components/header/Header.tsx'
import { useRecoverPasswordMutation } from '../../services/auth/auth.service.ts'
import { RecoverPasswordType } from '../../services/auth/auth.types.ts'

import c from './recoverPassword.module.scss'
export const RecoverPasswordPage = () => {
  const [recoverPassword, { isLoading }] = useRecoverPasswordMutation()
  const [checkEmail, setCheckEmail] = useState(false)

  const recoverPasswordHandler = async (data: RecoverPasswordType) => {
    try {
      await recoverPassword(data)
      setCheckEmail(true)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className={c.recoverPasswordPage}>
      <Header variant="login" />
      {!checkEmail ? (
        <RecoverPassword isLoading={isLoading} recoverPasswordHandler={recoverPasswordHandler} />
      ) : (
        <CheckEmail />
      )}
    </div>
  )
}
