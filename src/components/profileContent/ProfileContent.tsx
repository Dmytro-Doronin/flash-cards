import { FC } from 'react'

import avatar from '../../assets/images/IMG_0390.jpg'
import { ProfileAvatar, ProfileAvatarType } from '../profileAvatar/ProfileAvatar.tsx'
import { ProfileMenu } from '../profileMenu/ProfileMenu.tsx'

import c from './profileContent.module.scss'

export const ProfileContent: FC<ProfileAvatarType> = () => {
  const sayHi = () => {
    console.log('hi')
  }

  return (
    <div className={c.profileContent}>
      <ProfileAvatar image={avatar} callback={sayHi} />
      <ProfileMenu />
    </div>
  )
}
