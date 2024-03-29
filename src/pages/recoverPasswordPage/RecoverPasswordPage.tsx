import { useState } from 'react'

import { CheckEmail } from '../../components/auth/checkEmail/CheckEmail.tsx'
import { RecoverPassword } from '../../components/auth/recoverPassword/RecoverPassword.tsx'
import { Header } from '../../components/header/Header.tsx'
import { PageComponent } from '../../components/pageComponent/PageComponent.tsx'
import { useRecoverPasswordMutation } from '../../services/auth/auth.service.ts'
import { RecoverPasswordType } from '../../services/auth/auth.types.ts'

export const RecoverPasswordPage = () => {
  const [recoverPassword, { isLoading }] = useRecoverPasswordMutation()
  const [checkEmail, setCheckEmail] = useState(false)

  const recoverPasswordHandler = (data: RecoverPasswordType) => {
    recoverPassword(data)
    setCheckEmail(true)
  }

  return (
    <PageComponent>
      <Header variant="login" />
      {!checkEmail ? (
        <RecoverPassword isLoading={isLoading} recoverPasswordHandler={recoverPasswordHandler} />
      ) : (
        <CheckEmail />
      )}
    </PageComponent>
  )
}
