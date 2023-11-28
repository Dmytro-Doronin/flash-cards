import { Header } from '../../components/header/Header.tsx'
import { ProfileCard } from '../../components/profileCard/ProfileCard.tsx'

import c from './profilePage.module.scss'

export const ProfilePage = () => {
  return (
    <div className={c.profilePage}>
      <Header />
      <ProfileCard />
    </div>
  )
}
