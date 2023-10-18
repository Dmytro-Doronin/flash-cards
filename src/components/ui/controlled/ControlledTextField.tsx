import { useController, FieldValues, UseControllerProps } from 'react-hook-form'

import { TextField, TextFieldProps } from '../textField'

export type ControlledTextFieldProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<TextFieldProps, 'onChange' | 'value'>

export const ControlledTextField = <T extends FieldValues>({
  name,
  control,
  defaultValue,
  ...restProps
}: ControlledTextFieldProps<T>) => {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ name, control })

  // return <TextField value={value} errorMessage={error?.message} {...restProps} />

  return (
    <TextField
      {...{
        name,
        onValueChange: onChange,
        values: value, //values !== value so rest dont work
        errorMessage: error?.message,
        ...restProps,
      }}
    />
  )
}
