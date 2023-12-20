import { FC } from 'react'

import { clsx } from 'clsx'

import Edit from '../../assets/icons/Edit.tsx'
import { ProfileAvatar } from '../profileAvatar/ProfileAvatar.tsx'
import { Typography } from '../ui/typography'

import c from './profileInfo.module.scss'

export type InfoType = 'tooltip' | 'profile'

type ProfileInfoType = {
  name: string | undefined
  email: string | undefined
  variant: InfoType
  avatar?: string | null
  openNameChangeHandler?: (e: any) => void
  nameChange?: boolean
}

export const ProfileInfo: FC<ProfileInfoType> = ({
  name,
  email,
  variant,
  avatar,
  openNameChangeHandler,
  nameChange,
}) => {
  const classes = {
    infoBlock: clsx(variant === 'profile' ? `${c.infoBlock} ${c.profile}` : c.infoBlock),
    textBlock: clsx(
      variant === 'profile'
        ? `${c.textBlock} ${c.textBlock_center}`
        : `${c.textBlock} ${c.textBlock_start}`
    ),
    name: clsx(variant === 'profile' ? `${c.name} ${c.mr9px}` : c.name),
    nameBlock: clsx(c.nameBlock),
    edit: clsx(c.edit),
    textField: clsx(c.textField),
  }

  //add clases
  return (
    <div className={classes.infoBlock}>
      <ProfileAvatar variant={variant} image={avatar} />
      <div className={classes.textBlock}>
        <div className={classes.nameBlock}>
          <Typography className={classes.name} variant={'body1'}>
            {name}
          </Typography>
          {variant === 'profile' && !nameChange ? (
            <Edit
              className={classes.edit}
              onClick={e => (openNameChangeHandler ? openNameChangeHandler(e) : null)}
            />
          ) : null}
        </div>
        <Typography className={c.email} variant={'caption'}>
          {email}
        </Typography>
      </div>
    </div>
  )
}
// <div className={classes.infoBlock}>
//   <ProfileAvatar variant={variant} image={avatar} />
//   {variant === 'profile' && !nameChange ? (
//       <div className={classes.textBlock}>
//         <div className={classes.nameBlock}>
//           <Typography className={classes.name} variant={'body1'}>
//             {name}
//           </Typography>
//           <Edit
//               className={classes.edit}
//               onClick={e => (openNameChangeHandler ? openNameChangeHandler(e) : null)}
//           />
//         </div>
//         <Typography className={c.email} variant={'caption'}>
//           {email}
//         </Typography>
//       </div>
//   ) : variant === 'tooltip' ? (
//       <div className={classes.textBlock}>
//         <div className={classes.nameBlock}>
//           <Typography className={classes.name} variant={'body1'}>
//             {name}
//           </Typography>
//         </div>
//         <Typography className={c.email} variant={'caption'}>
//           {email}
//         </Typography>
//       </div>
//   ) : null}
// </div>
