import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '../../ui/button'
import { ControlledCheckbox, ControlledTextField } from '../../ui/controlled'
import { Typography } from '../../ui/typography'

import c from './loginForm.module.scss'
import { loginSchema } from './loginForm.validation.ts'
import { FormValues } from './loginFormTypes.ts'

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    // formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <div className={c.formWrapper}>
      <form className={c.loginForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={c.inputGroup}>
          <Typography variant={'h1'}>Sign In</Typography>
          <ControlledTextField
            name={'email'}
            type={'text'}
            control={control}
            label={'Email'}
          />
          <ControlledTextField
            name={'password'}
            control={control}
            type={'password'}
            label={'Password'}
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
        <a className={c.linkSignUp} href="/#">
          <Typography variant="body2">Sign Up</Typography>
        </a>
      </form>
    </div>
  )
}
