// import { CreateNewPassword } from '../../components/auth/createNewPassword/CreateNewPassword.tsx'
import { useNavigate } from 'react-router-dom'

import { AlertSnackbar } from '../../components/alertSnackbar/AlertSnackbar.tsx'
import { LoginForm } from '../../components/auth/loginForm/LoginForm.tsx'
// import RecoverPassword from '../../components/auth/recoverPassword/RecoverPassword.tsx'
// import { CheckEmail } from '../../components/auth/checkEmail/CheckEmail.tsx'
import { Header } from '../../components/header/Header.tsx'
import { PageComponent } from '../../components/pageComponent/PageComponent.tsx'
import { useLoginMutation } from '../../services/auth/auth.service.ts'
import { LoginType } from '../../services/auth/auth.types.ts'

export const SignInPage = () => {
  const [login, { isLoading, error }] = useLoginMutation()
  const navigate = useNavigate()

  const handleSubmit = async (args: LoginType) => {
    const response = await login(args)

    if ('data' in response && response) {
      navigate('/')
    }
  }

  return (
    <PageComponent>
      <Header variant="signUp" />
      <LoginForm isLoading={isLoading} onSubmit={handleSubmit} />
      {error && <AlertSnackbar message={error} variant="error" />}
    </PageComponent>
  )
}
