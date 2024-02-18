import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import c from '../../pages/learnPage/learnPage.module.scss'
import { ControlledRadioGroup } from '../ui/controlled/ControlledRadioGroup.tsx'
import { Options } from '../ui/select/SelectComponent.tsx'

import { FormValues } from './rateFormTypes.ts'
import { rateSchema } from './rateRadioGroup.validation.ts'

const options: Options[] = [
  {
    label: 'Did not know',
    value: '1',
  },
  {
    label: 'Forgot',
    value: '2',
  },
  {
    label: 'A lot of though',
    value: '3',
  },
  {
    label: 'Confused',
    value: '4',
  },
  {
    label: 'Knew the answer',
    value: '5',
  },
]

type RateRadioGroupType = {
  onConfirm: (value: string) => void
}

export const RateRadioGroup = ({ onConfirm }: RateRadioGroupType) => {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(rateSchema),
  })

  const onSubmitForm = (data: FormValues) => {
    onConfirm(data.rate)
  }

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className={c.chechBoxGroup}>
      <ControlledRadioGroup name="rate" control={control} options={options} />
    </form>
  )
}
