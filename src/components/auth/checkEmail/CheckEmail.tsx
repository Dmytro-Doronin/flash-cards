import CheckEmailSvg from '../../../assets/icons/CheckEmailSvg.tsx'
import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { Typography } from '../../ui/typography'

export const CheckEmail = () => {
  return (
    <Card>
      <Typography variant="h2">Check Email</Typography>
      <CheckEmailSvg />
      <Typography variant="body2">
        We’ve sent an Email with instructions to example@mail.com
      </Typography>
      <Button fullWidth variant="primary">
        Back to Sign In
      </Button>
    </Card>
  )
}
