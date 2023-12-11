import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { PageNotFound404 } from '../pages/404/PageNotFound404.tsx'

import { privetRoutesArray } from './privateRoutesArray.tsx'
import { PrivateRoutes } from './PrivetRoutes.tsx'
import { publicRoutesArray } from './publicRoutesArray.tsx'

const router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: privetRoutesArray,
  },
  ...publicRoutesArray,
  {
    path: '*',
    element: <PageNotFound404 />,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
