import { FC } from 'react'

import c from './profileAvatar.module.scss'

export type ProfileAvatarType = {
  image: string
  callback?: React.Dispatch<React.SetStateAction<boolean>>
}

export const ProfileAvatar: FC<ProfileAvatarType> = ({ image, callback }) => {
  return (
    <div
      className={c.profileAvatarWrapper}
      onClick={() => {
        if (callback) {
          callback(v => !v)
        }
      }}
    >
      <img className={c.profileAvatar} src={image} alt="as" />
    </div>
  )
}
