import { FC } from 'react'

import avatar from '../../assets/images/IMG_0390.jpg'
import { ProfileAvatar } from '../profileAvatar/ProfileAvatar.tsx'

import { Typography } from '../ui/typography'
import c from './profileInfo.module.scss'


type ProfileInfoType = {
  name: string
  email: string
}

export const ProfileInfo: FC<ProfileInfoType> = ({ name, email }) => {
  return (
    <div className={c.infoBlock}>
      <ProfileAvatar image={avatar} />
      <div className={c.textBlock}>
        <Typography variant={'body1'}>{name}</Typography>
        <Typography className={c.email} variant={'caption'}>
          {email}
        </Typography>
      </div>
    </div>
  )
}
