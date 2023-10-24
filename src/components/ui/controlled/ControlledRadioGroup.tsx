import { useController, FieldValues, UseControllerProps } from 'react-hook-form'

import { RadioGroup, RadioGroupProps } from '../radioGroup/RadioGroupComponent.tsx'

export type ControlledRadioGroupProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<RadioGroupProps, 'value' | 'onChange'>


export const ControlledRadioGroup = <T extends FieldValues> ({}: ControlledRadioGroupProps<T>) = {
    
}