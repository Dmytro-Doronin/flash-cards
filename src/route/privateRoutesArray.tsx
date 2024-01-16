import { RouteObject } from 'react-router-dom'

import { MainPackPage } from '../pages/mainPackPage/MainPackPage.tsx'
import { ProfilePage } from '../pages/profilePage/ProfilePage.tsx'

import { pathVariables } from './pathVariables.ts'

export const privetRoutesArray: RouteObject[] = [
  {
    path: pathVariables.MAIN,
    element: <MainPackPage />,
  },
  {
    path: pathVariables.PROFILE,
    element: <ProfilePage />,
  },
]
