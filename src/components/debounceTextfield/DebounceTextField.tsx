import { FC, useEffect, useState } from 'react'

import c from '../../pages/decksPage/decksPage.module.scss'
import { TextField, TextFieldProps } from '../ui/textField'

type DebounceTextFieldType = TextFieldProps

export const DebounceTextField: FC<DebounceTextFieldType> = ({
  onValueChange,
  placeholder,
  disabled,
  Icon,
  ...rest
}) => {
  const [inputValue, setInputValue] = useState<string>('')

  useEffect(() => {
    const id: number = +setTimeout(() => {
      onValueChange?.(inputValue)
    }, 1000)

    return () => clearTimeout(id)
  }, [onValueChange, inputValue])

  const onChangeValue = (value: string) => {
    setInputValue(value)
  }

  return (
    <TextField
      onValueChange={onChangeValue}
      value={inputValue}
      Icon={Icon}
      containerProps={c.search}
      placeholder={placeholder}
      disabled={disabled}
      {...rest}
    />
  )
}
