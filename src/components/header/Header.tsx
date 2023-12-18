// import { TooltipWrapper } from '../tooltipWrapper/TooltipWrapper.tsx'

import { NavLink } from 'react-router-dom'

import c from '../../App.module.scss'
import { pathVariables } from '../../route/pathVariables.ts'
import { TooltipWrapper } from '../tooltipWrapper/TooltipWrapper.tsx'
import { Button } from '../ui/button'

import s from './header.module.scss'

type HeaderType = {
  signUp?: boolean
  loggedIn?: boolean
}

export const Header = ({ signUp, loggedIn }: HeaderType) => {
  return (
    <header className={s.header}>
      <div className={c.container}>
        <div className={s.headerInner}>
          {loggedIn ? (
            <TooltipWrapper />
          ) : (
            <NavLink
              to={signUp ? pathVariables.LOGIN : pathVariables.SIGNUP}
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <Button>{signUp ? <div>Log In</div> : <div>Sign Up</div>}</Button>
            </NavLink>
          )}
        </div>
      </div>
    </header>
  )
}
