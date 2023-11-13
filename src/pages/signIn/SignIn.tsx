import { LoginForm } from '../../components/auth/login-form/Login-form.tsx'

import c from './signIn.module.scss'

export const SignIn = () => {
  return (
    <div className={c.signIn}>
      <LoginForm />
    </div>
  )
}
