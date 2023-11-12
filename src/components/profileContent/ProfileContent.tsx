import { useState } from 'react'

import avatar from '../../assets/images/IMG_0390.jpg'
import { ProfileAvatar } from '../profileAvatar/ProfileAvatar.tsx'
import { ProfileMenu } from '../profileMenu/ProfileMenu.tsx'

import c from './profileContent.module.scss'

export const ProfileContent = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const sayHi = () => {
    setIsVisible(isVisible => !isVisible)
  }

  return (
    <div className={c.profileContent}>
      <ProfileAvatar image={avatar} callback={sayHi} />
      <ProfileMenu isVisible={isVisible} />
    </div>
  )
}
