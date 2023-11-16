import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { privetRoutesArray } from './privateRoutesArray.tsx'
import { PrivateRoutes } from './PrivetRoutes.tsx'
import { publicRoutesArray } from './publicRoutesArray.tsx'

const router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: privetRoutesArray,
  },
  ...publicRoutesArray,
])

export const Router = () => {
  return <RouterProvider router={router} />
}
