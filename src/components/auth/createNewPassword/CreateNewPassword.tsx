import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { Controller, useForm } from 'react-hook-form'

import { NewPasswordType } from '../../../services/auth/auth.types.ts'
import { Loader } from '../../loader/Loader.tsx'
import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { TextField } from '../../ui/textField'
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
    form: clsx(c.form),
    title: clsx(c.title),
    input: clsx(c.input),
    subtitle: clsx(c.subtitle),
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateNewPasswordFormValues>({
    resolver: zodResolver(createNewPasswordSchema),
  })

  const submit = async (data: CreateNewPasswordFormValues) => {
    await createNewPasswordHandler({ hash: hash, password: data.createNewPassword })
    reset()
  }

  return (
    <Card className={classes.card}>
      <Typography className={classes.title} variant="h2">
        Create new password
      </Typography>
      <form className={c.form} onSubmit={handleSubmit(submit)}>
        <Controller
          render={({ field }) => (
            <TextField
              errorMessage={errors.createNewPassword?.message}
              label={'Password'}
              type={'password'}
              {...field}
            />
          )}
          name={'createNewPassword'}
          control={control}
          defaultValue=""
        />
        {/*<ControlledTextField*/}
        {/*  className={classes.input}*/}
        {/*  name="createNewPassword"*/}
        {/*  control={control}*/}
        {/*  type="password"*/}
        {/*  title="Password"*/}
        {/*  placeholder="Enter password"*/}
        {/*/>*/}
        <Typography className={classes.subtitle} variant="body2">
          Create new password and we will send you further instructions to email
        </Typography>

        <Button type={'submit'} fullWidth variant="primary">
          Create New Password
        </Button>
        {isLoading && <Loader variant="secondary" />}
      </form>
    </Card>
  )
}
