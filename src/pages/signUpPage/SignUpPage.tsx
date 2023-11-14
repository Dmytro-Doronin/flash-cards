import { RegistrationForm } from '../../components/auth/registrationForm/RegistrationForm.tsx'
import c from '../signInPage/signIn.module.scss'

export const SignUpPage = () => {
  return (
    <div className={c.signIn}>
      <RegistrationForm />
    </div>
  )
}
