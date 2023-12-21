import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'

import { ProfileAvatar } from '../profileAvatar/ProfileAvatar.tsx'
import { Button } from '../ui/button'
import { TextField } from '../ui/textField'

import c from './changeNameForm.module.scss'
import { changeNameFormSchema } from './changeNameForm.validation.ts'
import { FormValues } from './changeNameFormTypes.ts'

type ChangeNameFormType = {
  avatar?: string | null
  currentName?: string
  closeNameChangeHandler: () => void
  nameChange: boolean
}

export const ChangeNameForm = ({
  avatar,
  currentName,
  closeNameChangeHandler,
  nameChange,
}: ChangeNameFormType) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(changeNameFormSchema),
  })

  const onSubmitForm = (data: FormValues) => {
    console.log(data)
    closeNameChangeHandler()
  }

  return (
    <form className={c.changeNameForm} onSubmit={handleSubmit(onSubmitForm)}>
      <ProfileAvatar nameChange={nameChange} variant={'profile'} image={avatar} />
      <Controller
        render={({ field }) => (
          <TextField
            errorMessage={errors.name?.message}
            label={'Nickmame'}
            type={'text'}
            {...field}
          />
        )}
        name={'name'}
        control={control}
        defaultValue={currentName}
      />
      <Button fullWidth variant="primary" type={'submit'}>
        Save Changes
      </Button>
    </form>
  )
}
