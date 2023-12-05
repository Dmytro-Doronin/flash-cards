import { useController, FieldValues, UseControllerProps } from 'react-hook-form'

import { SelectComponent, SelectComponentType } from '../select/SelectComponent.tsx'

export type ControlledSelectProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<SelectComponentType, 'value' | 'onChange'>

//gi
export const ControlledSelect = <T extends FieldValues>(props: ControlledSelectProps<T>) => {
  const {
    field: { onChange, ...field },
    fieldState: { error },
  } = useController({ control: props.control, name: props.name })

  return <SelectComponent {...field} {...props} errorMessage={error?.message} onChange={onChange} />
}
