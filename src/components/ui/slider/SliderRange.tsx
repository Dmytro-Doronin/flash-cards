import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as SliderPrimitive from '@radix-ui/react-slider'
import { clsx } from 'clsx'

import { Typography } from '../typography'

import c from './slider-range.module.scss'

const SliderRange = forwardRef<
  ElementRef<typeof SliderPrimitive.Root>,
  Omit<ComponentPropsWithoutRef<typeof SliderPrimitive.Root>, 'value'> & {
    value: (undefined | number)[]
    label: string
  }
>(({ className, value, onValueChange, min, max, ...props }, ref) => {
  const classNames = {
    container: clsx(c.container, className),
    root: c.SliderRoot,
    track: c.SliderTrack,
    range: c.SliderRange,
    thumb: c.SliderThumb,
    span: c.spanBox,
  }

  // useEffect(() => {
  //   if (value?.[1] === undefined || value?.[1] === null) {
  //     onValueChange?.([value?.[0] ?? 0, max ?? 5])
  //   }
  // }, [max, value, onValueChange])

  return (
    <div className={classNames.container}>
      <label className={c.span}>
        <Typography variant={'body2'}>{props.label}</Typography>
      </label>
      <div className={c.sliderContent}>
        <span className={classNames.span}>{value?.[0]}</span>
        <SliderPrimitive.Root
          min={min}
          max={max}
          value={[value?.[0] ?? min ?? 0, value?.[1] ?? max ?? 0]}
          ref={ref}
          onValueChange={onValueChange}
          className={classNames.root}
          {...props}
        >
          <SliderPrimitive.Track className={classNames.track}>
            <SliderPrimitive.Range className={classNames.range} />
          </SliderPrimitive.Track>

          <SliderPrimitive.Thumb className={classNames.thumb} aria-label="Volume" />
          <SliderPrimitive.Thumb className={classNames.thumb} aria-label="Volume" />
        </SliderPrimitive.Root>
        <span className={classNames.span}>{value?.[1] ?? max}</span>
      </div>
    </div>
  )
})

export default SliderRange
