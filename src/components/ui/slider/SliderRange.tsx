import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as SliderPrimitive from '@radix-ui/react-slider'
import { clsx } from 'clsx'

import c from './slider-range.module.scss'

const SliderRange = forwardRef<
  ElementRef<typeof SliderPrimitive.Root>,
  ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
  const classNames = {
    container: clsx(c.container, className),
    root: c.SliderRoot,
    track: c.SliderTrack,
    range: c.SliderRange,
    thumb: c.SliderThumb,
    span: c.spanBox,
  }

  return (
    <div className={classNames.container}>
      <span className={classNames.span}>{props.value?.[0]}</span>
      <SliderPrimitive.Root ref={ref} className={classNames.root} {...props}>
        <SliderPrimitive.Track className={classNames.track}>
          <SliderPrimitive.Range className={classNames.range} />
        </SliderPrimitive.Track>

        <SliderPrimitive.Thumb className={classNames.thumb} aria-label="Volume" />
        <SliderPrimitive.Thumb className={classNames.thumb} aria-label="Volume" />
      </SliderPrimitive.Root>
      <span className={classNames.span}>{props?.value?.[1]}</span>
    </div>
  )
})

export default SliderRange
