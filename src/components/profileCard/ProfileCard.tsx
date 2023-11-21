import { ProfileInfo } from '../profileInfo/ProfileInfo.tsx'
import { Card } from '../ui/card'
import { Typography } from '../ui/typography'

export const ProfileCard = () => {
  return (
    <Card>
      <Typography variant="large">Personal Information</Typography>
      <ProfileInfo variant="profile" name="Dmytro" email="dmytro123@gmail.com" />
    </Card>
  )
}
