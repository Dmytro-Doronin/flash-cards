import { AlertSnackbar } from '../../components/alertSnackbar/AlertSnackbar.tsx'
import { ProfileCard } from '../../components/profileCard/ProfileCard.tsx'
import { useMeQuery } from '../../services/auth/auth.service.ts'
import { useAvatarUpdateMutation } from '../../services/profileService/profile.service.ts'
import { alertUtil } from '../../utils/AlertUtil.ts'

import c from './profilePage.module.scss'

export const ProfilePage = () => {
  const { data, isLoading } = useMeQuery()


  return (
    <div className={c.profilePage}>
      <ProfileCard
        isLoading={isLoading}
        name={data?.name}
        email={data?.email}
        avatar={data?.avatar}
      />
      {/*{isSuccess && <AlertSnackbar variant="success" message={alertUtil('avatar')} />}*/}
      {/*{error && <AlertSnackbar variant="error" message={error} />}*/}
    </div>
  )
}
