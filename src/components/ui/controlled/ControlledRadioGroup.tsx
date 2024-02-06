import { useController, FieldValues, UseControllerProps } from 'react-hook-form'

import { RadioGroup, RadioGroupProps } from '../radioGroup/RadioGroupComponent.tsx'

export type ControlledRadioGroupProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<RadioGroupProps, 'value' | 'onChange'>

export const ControlledRadioGroup = <T extends FieldValues>(
  props: ControlledRadioGroupProps<T>
) => {
  const {
    field: { onChange, ...field },
    fieldState: { error },
  } = useController({ control: props.control, name: props.name })

  return (
    <RadioGroup
      {...field}
      {...props}
      errorMessage={error?.message}
      id={props.name}
      onValueChange={onChange}
    />
  )
}
