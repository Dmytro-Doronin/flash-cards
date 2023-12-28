import { RecoverPassword } from '../../components/auth/recoverPassword/RecoverPassword.tsx'
import { Header } from '../../components/header/Header.tsx'

import c from './recoverPassword.module.scss'
export const RecoverPasswordPage = () => {
  return (
    <div className={c.recoverPasswordPage}>
      <Header />
      <RecoverPassword />
    </div>
  )
}
