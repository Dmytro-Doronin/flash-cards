import { RouteObject } from 'react-router-dom'

import { ProfilePage } from '../pages/profilePage/ProfilePage.tsx'

import { pathVariables } from './pathVariables.ts'

export const privetRoutesArray: RouteObject[] = [
  {
    path: pathVariables.MAIN,
    element: <div>Main</div>,
  },
  {
    path: pathVariables.PROFILE,
    element: <ProfilePage />,
  },
]
