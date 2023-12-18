import { ProfileInfo } from '../profileInfo/ProfileInfo.tsx'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { Typography } from '../ui/typography'

import c from './profileCard.module.scss'

type ProfileCardType = {
  name?: string
  email?: string
  avatar?: string | null
}

export const ProfileCard = ({ name, email, avatar }: ProfileCardType) => {
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
