import { ProfileInfo } from '../profileInfo/ProfileInfo.tsx'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { Typography } from '../ui/typography'

import c from './profileCard.module.scss'

type ProfileCardType = {
  name?: string | null
  email: string | null
  avatar: string | null
}

export const ProfileCard = () => {
  return (
    <Card>
      <Typography className={c.title} variant="large">
        Personal Information
      </Typography>
      <ProfileInfo variant="profile" name="Dmytro" email="dmytro123@gmail.com" />
      <Button variant="secondary">Log out</Button>
    </Card>
  )
}
