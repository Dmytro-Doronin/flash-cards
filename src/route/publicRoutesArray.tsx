import { RouteObject } from 'react-router-dom'

import { SignInPage } from '../pages/signInPage/SignInPage.tsx'
import { SignUpPage } from '../pages/signUpPage/SignUpPage.tsx'

export const publicRoutesArray: RouteObject[] = [
  {
    path: '/login',
    element: <SignInPage />,
  },
  {
    path: '/signup',
    element: <SignUpPage />,
  },
]
