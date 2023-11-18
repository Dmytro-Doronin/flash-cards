import { LoginForm } from '../../components/auth/loginForm/LoginForm.tsx'
import { Header } from '../../components/header/Header.tsx'

import c from './signIn.module.scss'

export const SignInPage = () => {
  return (
    <div className={c.signIn}>
      <Header />
      <LoginForm />
    </div>
  )
}
