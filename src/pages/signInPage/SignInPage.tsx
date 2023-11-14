import { LoginForm } from '../../components/auth/loginForm/LoginForm.tsx'

import c from './signIn.module.scss'

export const SignInPage = () => {
  return (
    <div className={c.signIn}>
      <LoginForm />
    </div>
  )
}
