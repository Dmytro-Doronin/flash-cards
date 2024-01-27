import { RegistrationForm } from '../../components/auth/registrationForm/RegistrationForm.tsx'
import { RegistrationFormValues } from '../../components/auth/registrationForm/registrationFormTypes.ts'
import { Header } from '../../components/header/Header.tsx'
import { PageComponent } from '../../components/pageComponent/PageComponent.tsx'
import { useSignUpMutation } from '../../services/auth/auth.service.ts'
export const SignUpPage = () => {
  const [signUp, { isLoading }] = useSignUpMutation()

  const signUpHandler = async (data: RegistrationFormValues) => {
    await signUp({ name: data.name, email: data.email, password: data.password })
  }

  return (
    <PageComponent>
      <Header variant="login" />
      <RegistrationForm isLoading={isLoading} callback={signUpHandler} />
    </PageComponent>
  )
}
