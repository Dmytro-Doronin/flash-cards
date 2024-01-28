import { useRef, useState } from 'react'

import EditIcon from '../../assets/icons/Edit.tsx'
import { useOutsideClick } from '../../hooks/useOutsideClick.tsx'
import { useLogOutMutation } from '../../services/auth/auth.service.ts'
import { ChangeNameForm } from '../changeNameForm/ChangeNameForm.tsx'
import { InputFile } from '../inputFile/InputFile.tsx'
import { Loader } from '../loader/Loader.tsx'
import { ProfileAvatar } from '../profileAvatar/ProfileAvatar.tsx'
import { ProfileInfo } from '../profileInfo/ProfileInfo.tsx'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { Typography } from '../ui/typography'

import c from './profileCard.module.scss'
// import { AlertSnackbar } from "../alertSnackbar/AlertSnackbar.tsx";

type ProfileCardType = {
  name?: string
  email?: string
  avatar?: string | null
  isLoading: boolean
  updateAvatarHandler: (data: File) => void
  avatarLoading: boolean
  updateNameHandler: (data: FormData) => void
  changeNameIsLoading: boolean
}

export const ProfileCard = ({
  name,
  email,
  avatar,
  updateAvatarHandler,
  avatarLoading,
  updateNameHandler,
  changeNameIsLoading,
}: ProfileCardType) => {
  const [logout] = useLogOutMutation()
  const [nameChange, setNameChange] = useState<boolean>(false)
  const componentRef = useRef<HTMLDivElement | null>(null)
  // const navigate = useNavigate()

  const handleLogOut = async () => {
    await logout()
    // navigate(pathVariables.LOGIN)
  }

  const openNameChangeHandler = (e: MouseEvent) => {
    e.stopPropagation()
    setNameChange(true)
  }

  const closeNameChangeHandler = () => {
    setNameChange(false)
  }

  useOutsideClick(componentRef, closeNameChangeHandler, nameChange)

  return (
    <Card componentRef={componentRef}>
      <Typography className={c.title} variant="large">
        Personal Information
      </Typography>
      {nameChange ? (
        <ChangeNameForm
          nameChange={nameChange}
          closeNameChangeHandler={closeNameChangeHandler}
          avatar={avatar}
          currentName={name}
          updateNameHandler={updateNameHandler}
          changeNameIsLoading={changeNameIsLoading}
        />
      ) : (
        <>
          <div className={c.avatarWrapper}>
            <InputFile callback={updateAvatarHandler}>
              <span className={c.editWrapper}>
                <EditIcon />
              </span>
            </InputFile>
            <ProfileAvatar variant={'profile'} image={avatar} />
          </div>
          {/*<ProfileAvatar variant={'profile'} image={avatar} />*/}
          <ProfileInfo
            variant="profile"
            openNameChangeHandler={openNameChangeHandler}
            name={name}
            email={email}
            nameChange={nameChange}
          />
          {avatarLoading && <Loader variant="secondary" />}
          <Button onClick={handleLogOut} variant="secondary">
            Log out
          </Button>
        </>
      )}
      {/*{avatarError && <AlertSnackbar variant='error' message={avatarError}/>}*/}
    </Card>
  )
}
