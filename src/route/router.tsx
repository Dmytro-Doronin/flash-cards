import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hi</div>,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
