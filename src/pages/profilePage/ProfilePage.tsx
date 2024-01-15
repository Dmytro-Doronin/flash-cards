import { AlertSnackbar } from '../../components/alertSnackbar/AlertSnackbar.tsx'
import { ProfileCard } from '../../components/profileCard/ProfileCard.tsx'
import { useMeQuery } from '../../services/auth/auth.service.ts'
import { useAvatarUpdateMutation, useChangeNameMutation } from "../../services/profileService/profile.service.ts";
import { useAppSelector } from '../../store/store.ts'

import c from './profilePage.module.scss'

export const ProfilePage = () => {
  const { data, isLoading } = useMeQuery()
  const [avatarUpdate, { error: avatarError, isLoading: avatarLoading }] = useAvatarUpdateMutation()
  const [changeName, { isLoading: changeNameIsLoading, error: nameError }] = useChangeNameMutation()

  const appAlert = useAppSelector(item => item.app.message)

  const updateAvatarHandler = async (data: FormData) => {
    await avatarUpdate(data)
  }

  const updateNameHandler = async (data: FormData) => {
    await changeName(data)
  }

  return (
    <div className={c.profilePage}>
      <ProfileCard
        isLoading={isLoading}
        name={data?.name}
        email={data?.email}
        avatar={data?.avatar}
        updateAvatarHandler={updateAvatarHandler}
        avatarLoading={avatarLoading}
        updateNameHandler={updateNameHandler}
        changeNameIsLoading={changeNameIsLoading}
      />
      {/*{isSuccess && <AlertSnackbar variant="success" message={alertUtil('avatar')} />}*/}
      {avatarError && <AlertSnackbar variant="error" message={avatarError} />}
      {nameError && <AlertSnackbar variant="error" message={nameError} />}
      {appAlert.message && <AlertSnackbar variant="error" message={appAlert} />}
    </div>
  )
}
