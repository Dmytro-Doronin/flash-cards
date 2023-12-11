import { RouteObject } from 'react-router-dom'

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
]
