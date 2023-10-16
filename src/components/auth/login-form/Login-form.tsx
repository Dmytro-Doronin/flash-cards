import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '../../ui/button'
import { ControlledCheckbox } from '../../ui/controlled/ControlledСheckbox.tsx'
import { TextField } from '../../ui/textField'

import { FormValues } from './login-form-types.ts'
import { loginSchema } from './login-form-validation.ts'

export const LoginForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  // const {
  //   field: { value, onChange },
  // } = useController({
  //   name: 'rememberMe',
  //   control,
  //   defaultValue: false,
  // })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField {...register('email')} label={'email'} errorMessage={errors.email?.message} />
      <TextField
        {...register('password')}
        label={'password'}
        errorMessage={errors.password?.message}
      />
      <ControlledCheckbox name={'rememberMe'} control={control} label={'Remember me'} />
      <Button type="submit">Submit</Button>
    </form>
  )
}
