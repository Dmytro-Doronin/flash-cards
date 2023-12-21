import { useRef, useState } from 'react'

import { useOutsideClick } from '../../hooks/useOutsideClick.tsx'
import { ProfileInfo } from '../profileInfo/ProfileInfo.tsx'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { Typography } from '../ui/typography'
import {profileType} from "../../services/profileService/profileService.types.ts";
import c from './profileCard.module.scss'
import { ChangeNameForm } from "../changeNameForm/ChangeNameForm.tsx";
import {useUserUpdateMutation} from "../../services/profileService/profile.service.ts";
import { useLogOutMutation } from "../../services/auth/auth.service.ts";
import { pathVariables } from "../../route/pathVariables.ts";
import { useNavigate } from "react-router-dom";


type ProfileCardType = {
  name?: string
  email?: string
  avatar?: string | null
}

export const ProfileCard = ({ name, email, avatar }: ProfileCardType) => {
  const [logout] = useLogOutMutation()
  const [userUpdate, {isLoading}] = useUserUpdateMutation()
  const [nameChange, setNameChange] = useState<boolean>(false)
  const componentRef = useRef<HTMLDivElement | null>(null)
  const navigate = useNavigate()

  const handleLogOut = async () => {
    try {
      await logout()
      navigate(pathVariables.LOGIN)
    } catch (e) {
      console.log(e)
    }
  }

  const openNameChangeHandler = (e: MouseEvent) => {
    e.stopPropagation()
    console.log('open')
    setNameChange(true)
  }

  const closeNameChangeHandler = () => {
    console.log('close')
    setNameChange(false)
  }

  useOutsideClick(componentRef, closeNameChangeHandler, nameChange)

  const changeUserDataHandler = async ({avatar, name, email }: profileType ) => {
    //await updateUserApi({name, avatar, email, userUpdate})
    try {
      await userUpdate({avatar, name, email})
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Card componentRef={componentRef}>
      <Typography className={c.title} variant="large">
        Personal Information
      </Typography>
      {nameChange ? (
          <ChangeNameForm isLoading={isLoading} changeUserDataHandler={changeUserDataHandler} nameChange={nameChange} closeNameChangeHandler={closeNameChangeHandler} avatar={avatar} currentName={name}/>
      ) : (
        <>
          <ProfileInfo
            variant="profile"
            openNameChangeHandler={openNameChangeHandler}
            name={name}
            email={email}
            avatar={avatar}
            nameChange={nameChange}
            changeUserDataHandler={changeUserDataHandler}
          />
          <Button onClick={handleLogOut} variant="secondary">
            Log out
          </Button>
        </>
      )}
    </Card>
  )
}