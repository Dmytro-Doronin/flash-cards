import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { useForm } from 'react-hook-form'

import { NewPasswordType } from '../../../services/auth/auth.types.ts'
import { Loader } from '../../loader/Loader.tsx'
import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { ControlledTextField } from '../../ui/controlled'
import { Typography } from '../../ui/typography'

import c from './createNewPassword.module.scss'
import { createNewPasswordSchema } from './createNewPassword.validation.ts'
import { CreateNewPasswordFormValues } from './createNewPasswordTypes.ts'

type CreateNewPasswordType = {
  hash?: string
  isLoading: boolean
  createNewPasswordHandler: (data: NewPasswordType) => void
}
export const CreateNewPassword = ({
  hash,
  isLoading,
  createNewPasswordHandler,
}: CreateNewPasswordType) => {
  const classes = {
    card: clsx(c.card),
    title: clsx(c.title),
    input: clsx(c.input),
    subtitle: clsx(c.subtitle),
  }

  const { control, handleSubmit, reset } = useForm<CreateNewPasswordFormValues>({
    resolver: zodResolver(createNewPasswordSchema),
  })

  const submit = (data: CreateNewPasswordFormValues) => {
    createNewPasswordHandler({ hash: hash, password: data.createNewPassword })
    reset()
  }

  return (
    <Card className={classes.card}>
      <Typography className={classes.title} variant="h2">
        Create new password
      </Typography>
      <form onSubmit={handleSubmit(submit)}>
        <ControlledTextField
          className={classes.input}
          name="createNewPassword"
          control={control}
          type="password"
          title="Password"
          placeholder="Enter password"
        />
        <Typography className={classes.subtitle} variant="body2">
          Create new password and we will send you further instructions to email
        </Typography>

        <Button type={'submit'} fullWidth variant="primary">
          Create New Password
        </Button>
        {isLoading && <Loader />}
      </form>
    </Card>
  )
}
