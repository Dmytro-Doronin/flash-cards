// eslint-disable-next-line import/default
import React, { FC } from 'react'

import { clsx } from 'clsx'

import EditIcon from '../../assets/icons/Edit.tsx'
import { InfoType } from '../profileInfo/ProfileInfo.tsx'

import c from './profileAvatar.module.scss'

export type ProfileAvatarType = {
  image: string
  callback?: React.Dispatch<React.SetStateAction<boolean>>
  variant: InfoType
}

export const ProfileAvatar: FC<ProfileAvatarType> = ({ image, callback, variant }) => {
  const classes = {
    avatarWrapper: clsx(
      variant === 'profile' ? `${c.profileAvatarWrapper} ${c[variant]}` : c.profileAvatarWrapper
    ),
    editWrapper: c.editWrapper,
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
      <img className={c.profileAvatar} src={image} alt="avatar" />
      {variant === 'profile' ? (
        <div className={classes.editWrapper}>
          <EditIcon />
        </div>
      ) : null}
    </div>
  )
}
