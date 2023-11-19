import { clsx } from 'clsx'

import CheckEmailSvg from '../../../assets/icons/CheckEmailSvg.tsx'
import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { Typography } from '../../ui/typography'

import c from './checkEmail.module.scss'

export const CheckEmail = () => {
  const classes = {
    title: clsx(c.marginBottom20px),
    typoBody: clsx(c.textAlignCenter, c.typographyClass, c.marginBottom60px),
    svg: clsx(c.marginBottom20px),
  }

  return (
    <Card className={c.card}>
      <Typography className={classes.title} variant="h2">
        Check Email
      </Typography>
      <CheckEmailSvg className={classes.svg} />
      <Typography className={classes.typoBody} variant="body2">
        We’ve sent an Email with instructions to example@mail.com
      </Typography>
      <Button fullWidth variant="primary">
        Back to Sign In
      </Button>
    </Card>
  )
}
