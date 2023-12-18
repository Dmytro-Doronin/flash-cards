import { RouteObject } from 'react-router-dom'

import { MainCardPage } from '../pages/mainCardPage/MainCardPage.tsx'
import { ProfilePage } from '../pages/profilePage/ProfilePage.tsx'

import { pathVariables } from './pathVariables.ts'

export const privetRoutesArray: RouteObject[] = [
  {
    path: pathVariables.MAIN,
    element: <MainCardPage />,
  },
  {
    path: pathVariables.PROFILE,
    element: <ProfilePage />,
  },
]
