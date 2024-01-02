import { RouteObject } from 'react-router-dom'

import { NewPasswordPage } from '../pages/newPasswordPage/NewPasswordPage.tsx'
import { RecoverPasswordPage } from '../pages/recoverPasswordPage/RecoverPasswordPage.tsx'
import { SignInPage } from '../pages/signInPage/SignInPage.tsx'
import { SignUpPage } from '../pages/signUpPage/SignUpPage.tsx'

import { pathVariables } from './pathVariables.ts'

export const publicRoutesArray: RouteObject[] = [
  {
    path: pathVariables.LOGIN,
    element: <SignInPage />,
  },
  {
    path: pathVariables.SIGNUP,
    element: <SignUpPage />,
  },
  {
    path: pathVariables.RECOVER,
    element: <RecoverPasswordPage />,
  },
  {
    path: pathVariables.NEWPASSWORD,
    element: <NewPasswordPage />,
  },
]
