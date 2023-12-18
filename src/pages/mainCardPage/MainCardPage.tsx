import { Header } from '../../components/header/Header.tsx'
import { useMeQuery } from '../../services/auth/auth.service.ts'

export const MainCardPage = () => {
  const { isError } = useMeQuery()

  return (
    <div>
      <Header loggedIn={!isError} />
    </div>
  )
}
