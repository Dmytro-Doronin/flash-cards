import { ProfileInfo } from '../profileInfo/ProfileInfo.tsx'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { Typography } from '../ui/typography'

import c from './profileCard.module.scss'

export const ProfileCard = () => {
  return (
    <Card>
      <Typography className={c.title} variant="large">
        Personal Information
      </Typography>
      <ProfileInfo variant="profile" name="Dmytro" email="dmytro123@gmail.com" />
      <Button variant="tertiary">Log out</Button>
    </Card>
  )
}
