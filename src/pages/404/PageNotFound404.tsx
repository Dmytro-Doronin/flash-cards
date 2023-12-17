import { NavLink } from 'react-router-dom'

import Error404img from '../../assets/images/404.png'
import { Header } from '../../components/header/Header.tsx'
import { Button } from '../../components/ui/button'
import { Typography } from '../../components/ui/typography'
import { pathVariables } from '../../route/pathVariables.ts'

import c from './pageNotFound404.module.scss'

export const PageNotFound404 = () => {
  return (
    <div className={c.page404}>
      <Header />
      <div className={c.contentWrapper}>
        <img className={c.img404} src={Error404img} alt="404" />
        <Typography className={c.typographyAlert} variant={'body1'}>
          Sorry! Page not found!
        </Typography>
        <NavLink to={pathVariables.MAIN}>
          <Button variant={'primary'}>Back to home page</Button>
        </NavLink>
      </div>
    </div>
  )
}
