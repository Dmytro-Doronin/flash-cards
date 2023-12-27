import { FC } from 'react'

import { clsx } from 'clsx'
import { NavLink, useNavigate } from 'react-router-dom'

import SignOutIcon from '../../assets/icons/SignOut.tsx'
import { dataList } from '../../common/MenuData.tsx'
import { useOutsideClick } from '../../hooks/useOutsideClick.tsx'
import { pathVariables } from '../../route/pathVariables.ts'
import { useLogOutMutation } from '../../services/auth/auth.service.ts'
import { ProfileAvatar } from '../profileAvatar/ProfileAvatar.tsx'
import { ProfileInfo } from '../profileInfo/ProfileInfo.tsx'
import { Typography } from '../ui/typography'

import c from './toolltip.module.scss'

type ProfileMenuType = {
  isVisible: boolean
  isInformation: boolean
  callback: () => void
  tooltipRef: React.MutableRefObject<null>
  avatar?: string | null
  name?: string
  email?: string
}

export const Tooltip: FC<ProfileMenuType> = ({
  isVisible,
  isInformation,
  callback,
  tooltipRef,
  avatar,
  name,
  email,
}) => {
  const [logout] = useLogOutMutation()
  const navigate = useNavigate()
  const styles = {
    wrapper: isVisible ? clsx(c.profileMenu, c.visible) : c.profileMenu,
    listItem: isInformation ? c.listItem : clsx(c.listItem, c.lisWithoutInfo),
    tooltipInfoBlock: clsx(c.tooltipInfoBlock),
  }

  useOutsideClick(tooltipRef, callback, isVisible)

  const handleLogOut = async () => {
    try {
      await logout()
      navigate(pathVariables.LOGIN)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={c.triangleMenu}></div>
      {isInformation && (
        <div className={styles.tooltipInfoBlock}>
          <ProfileAvatar variant={'tooltip'} image={avatar} />
          <ProfileInfo variant={'tooltip'} name={name} email={email} />
        </div>
      )}
      <ul className={c.list}>
        {dataList.map(Item => (
          <li key={Item.id} className={styles.listItem}>
            <NavLink className={c.link} to={Item.path}>
              <Item.icon className={c.icon} />
              <Typography variant={'caption'}>{Item.title}</Typography>
            </NavLink>
          </li>
        ))}
        <li onClick={handleLogOut} className={c.listItem}>
          <a className={c.link} href="#">
            <SignOutIcon className={c.icon} />
            <Typography variant={'caption'}>Sign Out</Typography>
          </a>
        </li>
      </ul>
    </div>
  )
}
