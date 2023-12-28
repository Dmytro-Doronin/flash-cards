import { ProfileCard } from '../../components/profileCard/ProfileCard.tsx'
import { useMeQuery } from '../../services/auth/auth.service.ts'

import c from './profilePage.module.scss'

export const ProfilePage = () => {
  const { data, isLoading } = useMeQuery()

  // cr
  return (
    <div className={c.profilePage}>
      <ProfileCard
        isLoading={isLoading}
        name={data?.name}
        email={data?.email}
        avatar={data?.avatar}
      />
    </div>
  )
}
