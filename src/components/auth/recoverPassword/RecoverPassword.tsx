import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { RecoverPasswordType } from '../../../services/auth/auth.types.ts'
import { Loader } from '../../loader/Loader.tsx'
import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { ControlledTextField } from '../../ui/controlled'
import { Typography } from '../../ui/typography'

import { recoverSchema } from './recoverForm.validation.ts'
import { RecoverFormValues } from './recoverFormType.ts'
import c from './recoverPassword.module.scss'

type RecoverPasswordTypeC = {
  isLoading: boolean
  recoverPasswordHandler: (data: RecoverPasswordType) => void
}

export const RecoverPassword = ({ isLoading, recoverPasswordHandler }: RecoverPasswordTypeC) => {
  const htmlLink: string =
    '<h1>Hi, ##name##</h1><p>Click <a href="http://localhost:5173/newPassword/##token##">here</a> to recover your password</p>'
  const {
    control,
    handleSubmit,
    // formState: { errors },
  } = useForm<RecoverFormValues>({
    resolver: zodResolver(recoverSchema),
  })

  const onSubmit = (data: RecoverFormValues) => {
    recoverPasswordHandler({ html: htmlLink, email: data.recoverEmail })
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
        {isLoading && <Loader />}
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
