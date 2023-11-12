import { FC, useRef } from 'react'

import { clsx } from 'clsx'

import SignOutIcon from '../../assets/icons/SignOut.tsx'
import { dataList } from '../../common/MenuData.tsx'
import { useOutsideClick } from '../../hooks/useOutsideClick.tsx'
import { ProfileInfo } from '../profileInfo/ProfileInfo.tsx'
import { Typography } from '../ui/typography'

import c from './profileMenu.module.scss'

type ProfileMenuType = {
  isVisible: boolean
  isInformation: boolean
  callback: () => void
  refka: any
}

export const ProfileTooltip: FC<ProfileMenuType> = ({ isVisible, isInformation, callback, refka }) => {


  // const tooltipRef = useRef(null)
  const styles = {
    wrapper: isVisible ? clsx(c.profileMenu, c.visible) : c.profileMenu,
    listItem: isInformation ? c.listItem : clsx(c.listItem, c.lisWithoutInfo),
  }

  useOutsideClick(refka, callback, isVisible)

  const name = 'Dima'
  const email = 'asdffa@asd.com'

  return (
    <div className={styles.wrapper}>
      <div className={c.triangleMenu}></div>
      {isInformation ? <ProfileInfo name={name} email={email} /> : null}
      <ul className={c.list}>
        {dataList.map(Item => (
          <li key={Item.id} className={styles.listItem}>
            <a className={c.link} href="#">
              <Item.icon className={c.icon} />
              <Typography variant={'caption'}>{Item.title}</Typography>
            </a>
          </li>
        ))}
        <li className={c.listItem}>
          <a className={c.link} href="#">
            <SignOutIcon className={c.icon} />
            <Typography variant={'caption'}>Sign Out</Typography>
          </a>
        </li>
      </ul>
    </div>
  )
}
