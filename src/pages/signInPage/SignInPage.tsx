// import { CreateNewPassword } from '../../components/auth/createNewPassword/CreateNewPassword.tsx'
import { useNavigate } from 'react-router-dom'

import { LoginForm } from '../../components/auth/loginForm/LoginForm.tsx'
// import RecoverPassword from '../../components/auth/recoverPassword/RecoverPassword.tsx'
// import { CheckEmail } from '../../components/auth/checkEmail/CheckEmail.tsx'
import { Header } from '../../components/header/Header.tsx'
import { Loader } from '../../components/loader/Loader.tsx'
import { useLoginMutation } from '../../services/auth/auth.service.ts'
import { LoginType } from '../../services/auth/auth.types.ts'

import c from './signIn.module.scss'

export const SignInPage = () => {
  const [login, { isLoading }] = useLoginMutation()
  const navigate = useNavigate()
  const handleSubmit = async (args: LoginType) => {
    try {
      await login(args)
      navigate('/')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className={c.signIn}>
      <Header />
      {isLoading ? <Loader /> : <LoginForm onSubmit={handleSubmit} />}
    </div>
  )
}
