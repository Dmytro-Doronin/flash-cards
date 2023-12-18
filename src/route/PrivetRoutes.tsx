import { Outlet, Navigate } from 'react-router-dom'

import { Header } from '../components/header/Header.tsx'
import { Loader } from '../components/loader/Loader.tsx'
import { useMeQuery } from '../services/auth/auth.service.ts'

export const PrivateRoutes = () => {
  const { isLoading, isError } = useMeQuery()

  if (isLoading) {
    return <Loader />
  }

  const isAuthenticated = !isError

  return isAuthenticated ? (
    <>
      <Header loggedIn={isAuthenticated} />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  )
}
