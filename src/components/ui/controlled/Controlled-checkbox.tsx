import { useController, FieldValues, UseControllerProps } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '../checkbox'

export type ControlledCheckboxProps<TFieldValues extends FieldValues> =
  UseControllerProps<TFieldValues> & Omit<CheckboxProps, 'onValueChange' | 'checked' | 'id'>

export const ControlledCheckbox = <TFieldValues extends FieldValues>({
  name,
  rules,
  shouldUnregister,
  control,
  defaultValue,
  ...checkboxProps
}: ControlledCheckboxProps<TFieldValues>) => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    rules,
    shouldUnregister,
    control,
    defaultValue,
  })

  return <Checkbox {...{ onValueChange: onChange, checked: value, id: name, ...checkboxProps }} />
}
