import { RouteObject } from 'react-router-dom'


import {ProfilePage} from '../pages/profilePage/ProfilePage.tsx'

export const privetRoutesArray: RouteObject[] = [
  {
    path: '/',
    element: <div>Main</div>,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
]
