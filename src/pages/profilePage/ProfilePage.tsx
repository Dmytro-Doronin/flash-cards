import { Header } from '../../components/header/Header.tsx'
import { ProfileCard } from '../../components/profileCard/ProfileCard.tsx'
import { useMeQuery } from '../../services/auth/auth.service.ts'

import c from './profilePage.module.scss'

export const ProfilePage = () => {
  const {data, isError } = useMeQuery()

  return (
    <div className={c.profilePage}>
      <Header loggedIn={!isError} />
      <ProfileCard  />
    </div>
  )
}
