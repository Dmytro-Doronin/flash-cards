import { Outlet, Navigate } from 'react-router-dom'

import { Header } from '../components/header/Header.tsx'
import { Loader } from '../components/loader/Loader.tsx'
import { useMeQuery } from '../services/auth/auth.service.ts'

export const PrivateRoutes = () => {
  const { data, isLoading } = useMeQuery()

  if (isLoading) {
    return <Loader variant="main" />
  }

  const isAuthenticated = !!data?.id

  return isAuthenticated ? (
    <>
      <Header variant="authenticated" loggedIn={isAuthenticated} />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  )
}
