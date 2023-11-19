import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { useForm } from 'react-hook-form'

import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { ControlledTextField } from '../../ui/controlled'
import { Typography } from '../../ui/typography'

import c from './registrationForm.module.scss'
import { registrationSchema } from './registrationForm.validation.ts'
import { RegistrationFormValues } from './registrationFormTypes.ts'

export const RegistrationForm = () => {
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
    // formState: { errors },
  } = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
  })

  const onSubmit = (data: RegistrationFormValues) => {
    console.log(data)
  }

  return (
    <Card className={classes.card}>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.inputGroup}>
          <Typography variant={'h1'}>Sign Up</Typography>
          <ControlledTextField name={'email'} type={'text'} control={control} label={'Email'} />
          <ControlledTextField
            name={'password'}
            control={control}
            type={'password'}
            label={'Password'}
          />
          <ControlledTextField
            name={'password2'}
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
