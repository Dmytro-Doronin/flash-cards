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
  updateNameHandler: (data: FormData) => void
  changeNameIsLoading: boolean
  // changeUserDataHandler: ({ avatar, name, email }: profileType) => Promise<void>
}

export const ChangeNameForm = ({
  avatar,
  currentName,
  closeNameChangeHandler,
  updateNameHandler,
  changeNameIsLoading,
}: ChangeNameFormType) => {
  // const [changeName, { isLoading }] = useChangeNameMutation()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(changeNameFormSchema),
  })

  const onSubmitForm = async (data: FormValues) => {
    try {
      const formDada = new FormData()

      formDada.append('name', data.name)
      await updateNameHandler(formDada)
    } catch (e) {
      throw new Error('Something went wrong')
    } finally {
      closeNameChangeHandler()
    }
  }

  return (
    <form className={c.changeNameForm} onSubmit={handleSubmit(onSubmitForm)}>
      <div className={c.avatarWrapper}>
        <ProfileAvatar variant={'profile'} image={avatar} />
      </div>

      <Controller
        render={({ field }) => (
          <TextField
            errorMessage={errors.name?.message}
            label={'Nickname'}
            type={'text'}
            {...field}
          />
        )}
        name={'name'}
        control={control}
        defaultValue={currentName}
      />
      <Button disabled={changeNameIsLoading} fullWidth variant="primary" type={'submit'}>
        Save Changes
      </Button>
    </form>
  )
}
