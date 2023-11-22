import { FC } from 'react'

import { clsx } from 'clsx'

import avatar from '../../assets/images/IMG_0390.jpg'
import { ProfileAvatar } from '../profileAvatar/ProfileAvatar.tsx'
import { Typography } from '../ui/typography'

import c from './profileInfo.module.scss'

export type InfoType = 'tooltip' | 'profile'

type ProfileInfoType = {
  name: string
  email: string
  variant: InfoType
}

export const ProfileInfo: FC<ProfileInfoType> = ({ name, email, variant }) => {
  const classes = {
    infoBlock: clsx(variant === 'profile' ? `${c.infoBlock} ${c.profile}` : c.infoBlock),
  }

  return (
    <div className={c.infoBlock}>
      <ProfileAvatar variant={variant} image={avatar} />
      <div className={c.textBlock}>
        <Typography variant={'body1'}>{name}</Typography>
        <Typography className={c.email} variant={'caption'}>
          {email}
        </Typography>
      </div>
    </div>
  )
}
