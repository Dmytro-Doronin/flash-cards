import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '../../ui/button'
import { ControlledTextField } from '../../ui/controlled'
import { Typography } from '../../ui/typography'
import c from '../loginForm/loginForm.module.scss'

import { registrationSchema } from './registrationForm.validation.ts'
import { RegistrationFormValues } from './registrationFormTypes.ts'
export const RegistrationForm = () => {
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
    <div className={c.formWrapper}>
      <form className={c.loginForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={c.inputGroup}>
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
        <Button fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  )
}
