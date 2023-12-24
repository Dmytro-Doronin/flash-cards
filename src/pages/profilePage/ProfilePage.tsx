import { ProfileCard } from '../../components/profileCard/ProfileCard.tsx'
import { useMeQuery } from '../../services/auth/auth.service.ts'

import c from './profilePage.module.scss'

export const ProfilePage = () => {
  const { data } = useMeQuery()

  // cr
  return (
    <div className={c.profilePage}>
      <ProfileCard name={data?.name} email={data?.email} avatar={data?.avatar} />
    </div>
  )
}
