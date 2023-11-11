import { FC } from 'react'

import c from './profileAvatar.module.scss'

export type ProfileAvatarType = {
  image: string
  callback?: () => void
}

export const ProfileAvatar: FC<ProfileAvatarType> = ({ image, callback }) => {
  return (
    <div className={c.profileAvatarWrapper} onClick={callback}>
      <img className={c.profileAvatar} src={image} alt="as" />
    </div>
  )
}
