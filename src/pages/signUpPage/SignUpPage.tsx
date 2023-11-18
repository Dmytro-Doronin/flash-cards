import { RegistrationForm } from '../../components/auth/registrationForm/RegistrationForm.tsx'
import { Header } from '../../components/header/Header.tsx'
import c from '../signInPage/signIn.module.scss'

export const SignUpPage = () => {
  return (
    <div className={c.signIn}>
      <Header />
      <RegistrationForm />
    </div>
  )
}
