import { ComponentPropsWithoutRef, ElementRef, forwardRef, useEffect } from "react";

import * as SliderPrimitive from '@radix-ui/react-slider'
import { clsx } from 'clsx'

import { Typography } from '../typography'

import c from './slider-range.module.scss'

type SliderRangeType = {
  label?: string
  value: number[]
} & ComponentPropsWithoutRef<typeof SliderPrimitive.Root>

const SliderRange = forwardRef<ElementRef<typeof SliderPrimitive.Root>, SliderRangeType>(
  ({ className, value, onValueChange, max, ...props }, ref) => {
    const classNames = {
      container: clsx(c.container, className),
      root: c.SliderRoot,
      track: c.SliderTrack,
      range: c.SliderRange,
      thumb: c.SliderThumb,
      span: c.spanBox,
    }

    useEffect(() => {
      if (value?.[1] === undefined || value?.[1] === null) {
        onValueChange?.([value?.[0] ?? 0, max ?? 0])
      }
    }, [max, value, onValueChange])

    return (
      <div className={classNames.container}>
        <label className={c.span}>
          <Typography variant={'body2'}>{props.label}</Typography>
        </label>
        <div className={c.sliderContent}>
          <span className={classNames.span}>{props.min}</span>
          <SliderPrimitive.Root
            min={props.min}
            max={max}
            value={[value?.[0] ?? 0, value?.[1] ?? max ?? 0]}
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
          <span className={classNames.span}>{value?.[1]}</span>
        </div>
      </div>
    )
  }
)

export default SliderRange
