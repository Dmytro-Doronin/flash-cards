import { RegistrationForm } from '../../components/auth/registrationForm/RegistrationForm.tsx'
import { Header } from '../../components/header/Header.tsx'

import c from './signUpPage.module.scss'
export const SignUpPage = () => {
  return (
    <div className={c.signUpPage}>
      <Header signUp />
      <RegistrationForm />
    </div>
  )
}
