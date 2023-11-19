import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '../../ui/button'
import { ControlledTextField } from '../../ui/controlled'
import { Typography } from '../../ui/typography'

import { recoverSchema } from './recoverForm.validation.ts'
import { RecoverFormValues } from './recoverFormType.ts'
import c from './recoverPassword.module.scss'
import { Card } from "../../ui/card";

const RecoverPassword = () => {
  const {
    control,
    handleSubmit,
    // formState: { errors },
  } = useForm<RecoverFormValues>({
    resolver: zodResolver(recoverSchema),
  })

  const onSubmit = (data: RecoverFormValues) => {
    console.log(data)
  }

  return (
    <Card className={c.formWrapper}>
      <Typography className={c.formTitle} variant="h2">
        Forgot your password?
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ControlledTextField
          name={'recoverEmail'}
          type={'text'}
          control={control}
          label={'Email'}
        />
        <Typography className={c.subtitle} variant="body2">
          Enter your email address and we will send you further instructions asdasdasd
        </Typography>
        <Button className={c.mbForButton} fullWidth variant="primary" type="submit">
          Send Instructions
        </Button>
        <Typography className={c.footerSubtitle} variant="body2">
          Did you remember your password?
        </Typography>
        <div className={c.footerLink}>
          <Button variant="link" as="a">
            Try logging in
          </Button>
        </div>

      </form>
    </Card>
  )
}

export default RecoverPassword
