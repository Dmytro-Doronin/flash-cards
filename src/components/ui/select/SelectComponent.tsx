import * as React from 'react'

import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import * as Select from '@radix-ui/react-select'
import { clsx } from 'clsx'

import { Typography } from '../typography'

import s from './select.module.scss'

const SelectItem = React.forwardRef<
  React.ElementRef<typeof Select.Item>,
  React.ComponentPropsWithoutRef<typeof Select.Item>
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item className={clsx(s.SelectItem, className)} {...props} ref={forwardedRef}>
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="SelectItemIndicator">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  )
})

export type variantType = 'pagination' | 'simple'

export type Options = {
  label: string
  value: string
}

export type SelectComponentType = Omit<
  React.ComponentPropsWithoutRef<typeof Select.Root>,
  'children'
> & {
  // onPerPageChange: (itemPerPage: string) => void
  // perPageForSelect: string
  // perPageOptions: Options[]
  // errorMessage?: string
  // variant: variantType
  onChange: (item: string) => void
  defaultValue: string
  options: Options[]
  variant: variantType
  errorMessage?: string
  className?: string
}

export const SelectComponent: React.FC<SelectComponentType> = props => {
  const { errorMessage, options, defaultValue, onChange, variant, value, ...restProps } = props
  const triggerClasses = clsx(s.SelectTrigger, s[variant])

  return (
    <Select.Root defaultValue={defaultValue} onValueChange={onChange} {...restProps}>
      <Select.Trigger className={triggerClasses}>
        <Select.Value defaultValue={defaultValue} placeholder={defaultValue} />
        <Select.Icon className={s.SelectIcon}>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content side="bottom" position={'popper'} className={s.SelectContent}>
          <Select.ScrollUpButton className={s.SelectScrollButton}>
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className={s.SelectViewport}>
            <Select.Group className={s.SelectGroup}>
              {options.map(item => {
                return (
                  <SelectItem key={item.label} value={item.value}>
                    <Typography className={s.selectTypography} variant={'body1'}>
                      {item.label}
                    </Typography>
                  </SelectItem>
                )
              })}
              {/*<SelectItem value="apple">Apple</SelectItem>*/}
              {/*<SelectItem value="banana">Banana</SelectItem>*/}
              {/*<SelectItem value="blueberry">Blueberry</SelectItem>*/}
              {/*<SelectItem value="grapes">Grapes</SelectItem>*/}
              {/*<SelectItem value="pineapple">Pineapple</SelectItem>*/}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className={s.SelectScrollButton}>
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
