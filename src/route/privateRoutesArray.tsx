import { RouteObject } from 'react-router-dom'

import { DecksPage } from '../pages/decksPage/DecksPage.tsx'
import { ProfilePage } from '../pages/profilePage/ProfilePage.tsx'

import { pathVariables } from './pathVariables.ts'

export const privetRoutesArray: RouteObject[] = [
  {
    path: pathVariables.MAIN,
    element: <DecksPage />,
  },
  {
    path: pathVariables.PROFILE,
    element: <ProfilePage />,
  },
]
