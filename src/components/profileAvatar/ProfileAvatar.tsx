import { FC } from 'react'

import c from './profileAvatar.module.scss'

type ProfileAvatarType = {
  image: string
  callback: () => void
}

export const ProfileAvatar: FC<ProfileAvatarType> = ({ image, callback }) => {
  return (
    <div onClick={callback}>
      <img src={image} alt="as" />
    </div>
  )
}
