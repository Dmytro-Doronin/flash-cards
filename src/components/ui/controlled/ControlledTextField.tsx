import { useController, FieldValues, UseControllerProps } from 'react-hook-form'

import { TextFieldProps } from '../textField'

export type ControlledTextFieldProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<TextFieldProps, 'id' | 'onChange' | 'value'>

export const ControlledTextField = <T extends FieldValues>({}: ControlledTextFieldProps<T>) => {
  return <div>fn</div>
}
