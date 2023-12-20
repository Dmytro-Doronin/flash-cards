import { ChangeEvent, useRef, useState } from 'react'

import { useOutsideClick } from '../../hooks/useOutsideClick.tsx'
import { ProfileAvatar } from '../profileAvatar/ProfileAvatar.tsx'
import { ProfileInfo } from '../profileInfo/ProfileInfo.tsx'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { TextField } from '../ui/textField'
import { Typography } from '../ui/typography'

import c from './profileCard.module.scss'

type ProfileCardType = {
  name?: string
  email?: string
  avatar?: string | null
}

export const ProfileCard = ({ name, email, avatar }: ProfileCardType) => {
  const [nameChange, setNameChange] = useState<boolean>(false)
  const componentRef = useRef<HTMLDivElement | null>(null)
  const [currentName, setCurrentName] = useState<string | undefined>(name)
  const openNameChangeHandler = (e: any) => {
    e.stopPropagation()
    console.log('open')
    setNameChange(true)
  }

  const closeNameChangeHandler = () => {
    console.log('close')
    setNameChange(false)
  }

  const setCurrentNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentName(e.target.value)
  }

  useOutsideClick(componentRef, closeNameChangeHandler, nameChange)

  return (
    <Card componentRef={componentRef}>
      <Typography className={c.title} variant="large">
        Personal Information
      </Typography>
      {nameChange ? (
        <div className={c.inputBlock}>
          <ProfileAvatar variant={'profile'} image={avatar} />
          <TextField label={'Nickmame'} value={currentName} onChange={setCurrentNameHandler} />
          <Button fullWidth variant="primary">
            Save Changes
          </Button>
        </div>
      ) : (
        <>
          <ProfileInfo
            variant="profile"
            openNameChangeHandler={openNameChangeHandler}
            name={name}
            email={email}
            avatar={avatar}
            nameChange={nameChange}
          />
          <Button onClick={() => setNameChange(true)} variant="secondary">
            Log out
          </Button>
        </>
      )}
    </Card>
  )
}
