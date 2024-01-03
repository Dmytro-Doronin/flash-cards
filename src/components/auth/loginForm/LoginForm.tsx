import { FC } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { Controller, useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'

import { pathVariables } from '../../../route/pathVariables.ts'
import { LoginType } from '../../../services/auth/auth.types.ts'
import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { ControlledCheckbox } from '../../ui/controlled'
import { TextField } from '../../ui/textField'
import { Typography } from '../../ui/typography'

import c from './loginForm.module.scss'
import { loginSchema } from './loginForm.validation.ts'
import { FormValues } from './loginFormTypes.ts'
import { Loader } from "../../loader/Loader.tsx";

type LoginFormType = {
  isLoading: boolean
  className?: string
  onSubmit: (data: LoginType) => void
}

export const LoginForm: FC<LoginFormType> = ({ className, onSubmit, isLoading }) => {
  const styles = {
    formWrapper: clsx(c.formWrapper, className),
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmitForm = (data: FormValues) => {
    onSubmit(data)
    reset()
  }

  return (
    <Card className={styles.formWrapper}>
      <form className={c.loginForm} onSubmit={handleSubmit(onSubmitForm)}>
        <div className={c.inputGroup}>
          <Typography variant={'h1'}>Sign In</Typography>
          <Controller
            render={({ field }) => (
              <TextField
                errorMessage={errors.email?.message}
                label={'Email'}
                type={'text'}
                {...field}
              />
            )}
            name={'email'}
            control={control}
            defaultValue=""
          />
          <Controller
            render={({ field }) => (
              <TextField
                errorMessage={errors.password?.message}
                label={'Password'}
                type={'password'}
                {...field}
              />
            )}
            name={'password'}
            control={control}
            defaultValue=""
          />
        </div>
        <ControlledCheckbox name={'rememberMe'} control={control} label={'Remember me'} />
        <div className={c.forgotPassword}>
          <NavLink to={pathVariables.RECOVER}>
            <Typography variant="body2">Forgot password?</Typography>
          </NavLink>
        </div>
        <Button className={c.button} fullWidth type="submit">
          Submit
        </Button>
        {isLoading && <Loader variant="secondary" />}
        <div className={c.question}>
          <Typography variant="body2">Don`t have an account?</Typography>
        </div>
        <NavLink to={pathVariables.SIGNUP} className={c.linkSignUp}>
          <Typography variant="body2">Sign Up</Typography>
        </NavLink>
      </form>
    </Card>
  )
}
