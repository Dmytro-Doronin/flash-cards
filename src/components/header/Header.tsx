// import { TooltipWrapper } from '../tooltipWrapper/TooltipWrapper.tsx'

import { NavLink } from 'react-router-dom'

import c from '../../App.module.scss'
import { pathVariables } from '../../route/pathVariables.ts'
import { Button } from '../ui/button'

import s from './header.module.scss'

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={c.container}>
        <div className={s.headerInner}>
          {/*<TooltipWrapper />*/}
          <Button>
            <NavLink to={pathVariables.SIGNUP} style={{ textDecoration: 'none', color: 'white' }}>
              Sign Up
            </NavLink>
          </Button>
        </div>
      </div>
    </header>
  )
}
