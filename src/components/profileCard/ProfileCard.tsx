import { useRef, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { useOutsideClick } from '../../hooks/useOutsideClick.tsx'
import { pathVariables } from '../../route/pathVariables.ts'
import { useLogOutMutation } from '../../services/auth/auth.service.ts'
import { ChangeNameForm } from '../changeNameForm/ChangeNameForm.tsx'
import { ProfileAvatar } from '../profileAvatar/ProfileAvatar.tsx'
import { ProfileInfo } from '../profileInfo/ProfileInfo.tsx'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { Typography } from '../ui/typography'

import c from './profileCard.module.scss'

type ProfileCardType = {
  name?: string
  email?: string
  avatar?: string | null
  isLoading: boolean
}

export const ProfileCard = ({ name, email, avatar }: ProfileCardType) => {
  const [logout] = useLogOutMutation()
  const [nameChange, setNameChange] = useState<boolean>(false)
  const componentRef = useRef<HTMLDivElement | null>(null)
  const navigate = useNavigate()

  const handleLogOut = async () => {
    try {
      await logout()
      navigate(pathVariables.LOGIN)
    } catch (e) {
      console.log(e)
    }
  }

  const openNameChangeHandler = (e: MouseEvent) => {
    e.stopPropagation()
    console.log('open')
    setNameChange(true)
  }

  const closeNameChangeHandler = () => {
    console.log('close')
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
        />
      ) : (
        <>
          <ProfileAvatar variant={'profile'} image={avatar} />
          <ProfileInfo
            variant="profile"
            openNameChangeHandler={openNameChangeHandler}
            name={name}
            email={email}
            nameChange={nameChange}
          />
          <Button onClick={handleLogOut} variant="secondary">
            Log out
          </Button>
        </>
      )}
    </Card>
  )
}
