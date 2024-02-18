import { clsx } from 'clsx'
import { NavLink } from 'react-router-dom'

import MainCheck from '../../assets/icons/MainCheck.tsx'
import { pathVariables } from '../../route/pathVariables.ts'
import c from '../auth/checkEmail/checkEmail.module.scss'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { Typography } from '../ui/typography'

export const PasswordChanged = () => {
  const classes = {
    title: clsx(c.marginBottom20px),
    typoBody: clsx(c.textAlignCenter, c.typographyClass, c.marginBottom60px),
    svg: clsx(c.marginBottom20px),
  }

  return (
    <Card className={c.card}>
      <Typography className={classes.title} variant="h2">
        Password has been changed
      </Typography>
      <MainCheck className={classes.svg} />
      {/*<Typography className={classes.typoBody} variant="body2">*/}
      {/*  We’ve sent an Email with instructions to example@mail.com*/}
      {/*</Typography>*/}
      <NavLink to={pathVariables.LOGIN}>
        <Button fullWidth variant="primary">
          Back to Sign In
        </Button>
      </NavLink>
    </Card>
  )
}
