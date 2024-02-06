// import { TooltipWrapper } from '../tooltipWrapper/TooltipWrapper.tsx'

import { NavLink } from 'react-router-dom'

import c from '../../App.module.scss'
import { pathVariables } from '../../route/pathVariables.ts'
import { TooltipWrapper } from '../tooltipWrapper/TooltipWrapper.tsx'
import { Button } from '../ui/button'
import { Typography } from '../ui/typography'

import s from './header.module.scss'

type HeaderType = {
  signUp?: boolean
  loggedIn?: boolean
  variant: 'login' | 'signUp' | 'authenticated'
}

export const Header = ({ loggedIn, variant }: HeaderType) => {
  return (
    <header className={s.header}>
      <div className={c.container}>
        <div className={s.headerInner}>
          <NavLink to="/">
            <Typography variant="body1">Quizlet</Typography>
          </NavLink>
          {loggedIn && variant === 'authenticated' ? (
            <TooltipWrapper />
          ) : (
            <NavLink
              to={variant === 'login' ? pathVariables.LOGIN : pathVariables.SIGNUP}
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <Button>{variant === 'login' ? <div>Log In</div> : <div>Sign Up</div>}</Button>
            </NavLink>
          )}
        </div>
      </div>
    </header>
  )
}
