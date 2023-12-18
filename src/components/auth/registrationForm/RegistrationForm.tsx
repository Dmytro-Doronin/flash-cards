import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { Controller, useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'

import { pathVariables } from '../../../route/pathVariables.ts'
import { useSignUpMutation } from '../../../services/auth/auth.service.ts'
import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { TextField } from '../../ui/textField'
import { Typography } from '../../ui/typography'

import c from './registrationForm.module.scss'
import { registrationWithPasswordConfirmationSchema } from './registrationForm.validation.ts'
import { RegistrationFormValues } from './registrationFormTypes.ts'

export const RegistrationForm = () => {
  const [signUp] = useSignUpMutation()

  const classes = {
    card: clsx(c.formWrapper),
    form: clsx(c.registrationForm),
    inputGroup: clsx(c.inputGroup),
    submitButton: clsx(c.button),
    subtitle: clsx(c.question),
    linkButton: clsx(c.linkSignUp),
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationWithPasswordConfirmationSchema),
  })

  const onSubmit = (data: RegistrationFormValues) => {
    signUp({ name: data.name, email: data.email, password: data.password }).then(data =>
      console.log(data)
    )
    reset()
  }

  return (
    <Card className={classes.card}>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.inputGroup}>
          <Typography variant={'h1'}>Sign Up</Typography>
          {/*<ControlledTextField name={'name'} type={'text'} control={control} label={'Name'} />*/}
          <Controller
            render={({ field }) => (
              <TextField
                errorMessage={errors.name?.message}
                label={'Name'}
                type={'text'}
                {...field}
              />
            )}
            name={'name'}
            control={control}
            defaultValue=""
          />
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

          <Controller
            render={({ field }) => (
              <TextField
                errorMessage={errors.confirmPassword?.message}
                label={'Confirm password'}
                type={'password'}
                {...field}
              />
            )}
            name={'confirmPassword'}
            control={control}
            defaultValue=""
          />
          {/*<ControlledTextField name={'email'} type={'text'} control={control} label={'Email'} />*/}
          {/*<ControlledTextField*/}
          {/*  name={'password'}*/}
          {/*  control={control}*/}
          {/*  type={'password'}*/}
          {/*  label={'Password'}*/}
          {/*/>*/}
          {/*<ControlledTextField*/}
          {/*  name={'confirmPassword'}*/}
          {/*  control={control}*/}
          {/*  type={'password'}*/}
          {/*  label={'Repeat your password'}*/}
          {/*/>*/}
        </div>
        <Button className={classes.submitButton} fullWidth type="submit">
          Submit
        </Button>
        <Typography className={classes.subtitle} variant="body2">
          Already have an account?
        </Typography>
        <div className={c.textAlignCenter}>
          <NavLink to={pathVariables.LOGIN} className={classes.linkButton}>
            <Typography variant="body2">Sign In</Typography>
          </NavLink>
        </div>
      </form>
    </Card>
  )
}
