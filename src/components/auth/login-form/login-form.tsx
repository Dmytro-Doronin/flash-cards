import { useController, useForm } from 'react-hook-form'

import { Button } from '../../ui/button'
import { Checkbox } from '../../ui/checkbox'
import { TextField } from '../../ui/textField'

type FormValues = {
  email: string
  password: string
}

export const LoginForm = () => {
  const { register, control, handleSubmit } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  const {
    field: { value, onChange },
  } = useController({
    name: 'rememberMe',
    control,
    defaultValue: false,
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField {...register('email')} label={'email'} />
      <TextField {...register('password')} label={'password'} />
      <Checkbox checked={value} onValueChange={} />
      <Button type="submit">Submit</Button>
    </form>
  )
}
