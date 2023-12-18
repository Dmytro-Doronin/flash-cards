import { FC } from 'react'

import { clsx } from 'clsx'

import { ProfileAvatar } from '../profileAvatar/ProfileAvatar.tsx'
import { Typography } from '../ui/typography'

import c from './profileInfo.module.scss'

export type InfoType = 'tooltip' | 'profile'

type ProfileInfoType = {
  name: string | undefined
  email: string | undefined
  variant: InfoType
  avatar?: string | null
}

export const ProfileInfo: FC<ProfileInfoType> = ({ name, email, variant, avatar }) => {
  const classes = {
    infoBlock: clsx(variant === 'profile' ? `${c.infoBlock} ${c.profile}` : c.infoBlock),
    textBlock: clsx(
      variant === 'profile'
        ? `${c.textBlock} ${c.textBlock_center}`
        : `${c.textBlock} ${c.textBlock_start}`
    ),
    name: clsx(c.name),
  }

  //add clases
  return (
    <div className={classes.infoBlock}>
      <ProfileAvatar variant={variant} image={avatar} />
      <div className={classes.textBlock}>
        <Typography className={classes.name} variant={'body1'}>
          {name}
        </Typography>
        <Typography className={c.email} variant={'caption'}>
          {email}
        </Typography>
      </div>
    </div>
  )
}
