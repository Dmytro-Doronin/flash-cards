// eslint-disable-next-line import/default
import React, { FC } from 'react'

import { clsx } from 'clsx'

import AvatarNotFound from '../../assets/images/userImageNotFound.png'
// import { InputFile } from '../inputFile/InputFile.tsx'
import { InfoType } from '../profileInfo/ProfileInfo.tsx'

import c from './profileAvatar.module.scss'

export type ProfileAvatarType = {
  image?: string | null
  callback?: React.Dispatch<React.SetStateAction<boolean>>
  variant: InfoType
  className?: string
  // updateAvatarHandler: (data: FormData) => void
}

export const ProfileAvatar: FC<ProfileAvatarType> = ({ image, callback, variant, className }) => {
  const classes = {
    avatarWrapper: clsx(
      variant === 'profile' ? `${c.profileAvatarWrapper} ${c[variant]}` : c.profileAvatarWrapper
    ),
    editWrapper: c.editWrapper,
    profileAvatar: clsx(c.profileAvatar, className),
  }

  return (
    <div
      className={classes.avatarWrapper}
      onClick={() => {
        if (callback) {
          callback(v => !v)
        }
      }}
    >
      <img className={classes.profileAvatar} src={image ? image : AvatarNotFound} alt="avatar" />
    </div>
  )
}
