import { useRef, useState } from "react";

import { ProfileInfo } from '../profileInfo/ProfileInfo.tsx'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { Typography } from '../ui/typography'

import c from './profileCard.module.scss'
import { useOutsideClick } from "../../hooks/useOutsideClick.tsx";


type ProfileCardType = {
  name?: string
  email?: string
  avatar?: string | null
}

export const ProfileCard = ({ name, email, avatar }: ProfileCardType) => {
  const [nameChange, setNameChange] = useState<boolean>(false)
  const componentRef = useRef<HTMLDivElement | null>(null)

  const openNameChangeHandler = (e: any) => {
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
      <ProfileInfo
        variant="profile"
        openNameChangeHandler={openNameChangeHandler}
        name={name}
        email={email}
        avatar={avatar}
        nameChange={nameChange}
      />
      {nameChange ? (
        <Button fullWidth variant="primary">
          Save Changes
        </Button>
      ) : (
        <Button onClick={() => setNameChange(true)} variant="secondary">
          Log out
        </Button>
      )}
    </Card>
  )
}
