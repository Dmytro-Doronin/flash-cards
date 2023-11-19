// import { LoginForm } from '../../components/auth/loginForm/LoginForm.tsx'
// import RecoverPassword from '../../components/auth/recoverPassword/RecoverPassword.tsx'
// import { CheckEmail } from '../../components/auth/checkEmail/CheckEmail.tsx'
import { CreateNewPassword } from '../../components/auth/createNewPassword/CreateNewPassword.tsx'
import { Header } from '../../components/header/Header.tsx'

import c from './signIn.module.scss'

export const SignInPage = () => {
  return (
    <div className={c.signIn}>
      <Header />
      <CreateNewPassword />
    </div>
  )
}
