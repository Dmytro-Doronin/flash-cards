import { FC } from 'react'

import { clsx } from 'clsx'

import avatar from '../../assets/images/IMG_0390.jpg'
import { ProfileAvatar } from '../profileAvatar/ProfileAvatar.tsx'
import { Typography } from '../ui/typography'

import c from './profileMenu.module.scss'

type ProfileMenuType = {
  isVisible: boolean
  isInformation: boolean
}

export const ProfileMenu: FC<ProfileMenuType> = ({ isVisible, isInformation }) => {
  const styles = isVisible ? clsx(c.profileMenu, c.visible) : c.profileMenu
  const name = 'Dima'
  const email = 'asdffa@asd.com'

  const

  return (
    <div className={styles}>
      <div className={c.triangleMenu}></div>
      <div className={c.infoBlock}>
        <ProfileAvatar image={avatar} />
        <div className={c.textBlock}>
          <Typography variant={'body1'}>{name}</Typography>
          <Typography className={c.email} variant={'caption'}>
            {email}
          </Typography>
        </div>
      </div>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}
