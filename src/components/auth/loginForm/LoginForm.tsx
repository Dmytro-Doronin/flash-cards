import { FC } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { Controller, useForm } from 'react-hook-form'

import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { ControlledCheckbox } from '../../ui/controlled'
import { TextField } from '../../ui/textField'
import { Typography } from '../../ui/typography'

import c from './loginForm.module.scss'
import { loginSchema } from './loginForm.validation.ts'
import { FormValues } from './loginFormTypes.ts'
import { NavLink } from "react-router-dom";
import { pathVariables } from "../../../route/pathVariables.ts";

type LoginFormType = {
  className?: string
}

export const LoginForm: FC<LoginFormType> = ({ className }) => {
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

  const onSubmit = (data: FormValues) => {
    console.log(data)
    reset()
  }

  return (
    <Card className={styles.formWrapper}>
      <form className={c.loginForm} onSubmit={handleSubmit(onSubmit)}>
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
          <a href="/#">
            <Typography variant="body2">Forgot password?</Typography>
          </a>
        </div>
        <Button className={c.button} fullWidth type="submit">
          Submit
        </Button>
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
