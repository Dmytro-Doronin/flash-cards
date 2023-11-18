import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { ControlledTextField } from '../../ui/controlled'

import { recoverSchema } from './recoverForm.validation.ts'
import { RecoverFormValues } from './recoverFormType.ts'

const RecoverPassword = () => {
  const {
    control,
    handleSubmit,
    // formState: { errors },
  } = useForm<RecoverFormValues>({
    resolver: zodResolver(recoverSchema),
  })

  const onSubmit = (data: RecoverFormValues) => {
    console.log(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ControlledTextField
          name={'recoverEmail'}
          type={'text'}
          control={control}
          label={'Email'}
        />
      </form>
    </div>
  )
}

export default RecoverPassword
