import { useEffect } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { useForm } from 'react-hook-form'

import { useSignUpMutation } from '../../../services/auth/auth.service.ts'
import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { ControlledTextField } from '../../ui/controlled'
import { Typography } from '../../ui/typography'

import c from './registrationForm.module.scss'
import { registrationWithPasswordConfirmationSchema } from './registrationForm.validation.ts'
import { RegistrationFormValues } from './registrationFormTypes.ts'

export const RegistrationForm = () => {
  const [signUp, { error }] = useSignUpMutation()

  console.log(error)
  const classes = {
    card: clsx(c.formWrapper),
    form: clsx(c.registrationForm),
    inputGroup: clsx(c.inputGroup),
    submitButton: clsx(c.button),
    subtitle: clsx(c.question),
    linkButton: clsx(c.linkSignUp),
  }

  const { control, handleSubmit, formState, reset } = useForm<RegistrationFormValues>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(registrationWithPasswordConfirmationSchema),
  })

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset()
    }
  }, [formState, reset])

  const onSubmit = (data: RegistrationFormValues) => {
    console.log(data)
    signUp({ name: data.name, email: data.email, password: data.password }).then(data =>
      console.log(data)
    )
  }

  return (
    <Card className={classes.card}>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.inputGroup}>
          <Typography variant={'h1'}>Sign Up</Typography>
          <ControlledTextField name={'name'} type={'text'} control={control} label={'Name'} />
          <ControlledTextField name={'email'} type={'text'} control={control} label={'Email'} />
          <ControlledTextField
            name={'password'}
            control={control}
            type={'password'}
            label={'Password'}
          />
          <ControlledTextField
            name={'confirmPassword'}
            control={control}
            type={'password'}
            label={'Repeat your password'}
          />
        </div>
        <Button className={classes.submitButton} fullWidth type="submit">
          Submit
        </Button>
        <Typography className={classes.subtitle} variant="body2">
          Already have an account?
        </Typography>
        <div className={c.textAlignCenter}>
          <Button variant="link" as="a" className={classes.linkButton} href="#/">
            <Typography variant="body2">Sign In</Typography>
          </Button>
        </div>
      </form>
    </Card>
  )
}
