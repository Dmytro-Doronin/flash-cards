import { ProfileInfo } from '../profileInfo/ProfileInfo.tsx'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { Typography } from '../ui/typography'

import c from './profileCard.module.scss'
import { useState } from "react";

type ProfileCardType = {
  name?: string
  email?: string
  avatar?: string | null
}



export const ProfileCard = ({ name, email, avatar }: ProfileCardType) => {

  const [nameChange, setNameChange] = useState<boolean>(false)

  const openNameChangeHandler = (data: boolean) => {
    setNameChange(data)
  }

  return (
    <Card>
      <Typography className={c.title} variant="large">
        Personal Information
      </Typography>
      <ProfileInfo variant="profile" name={name} email={email} avatar={avatar} />
      <Button variant="secondary">Log out</Button>
    </Card>
  )
}
