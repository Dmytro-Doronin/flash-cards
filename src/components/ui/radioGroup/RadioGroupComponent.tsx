import { forwardRef } from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'
export const RadioGroupComponent = forwardRef<typeof RadioGroup.Root>() => {
  return (
    <RadioGroup.Root>
      <RadioGroup.Item>
        <RadioGroup.Indicator />
      </RadioGroup.Item>
    </RadioGroup.Root>
  )
}
