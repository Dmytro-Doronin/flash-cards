import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import c from './pageComponent.module.scss'

export type PageProps = ComponentPropsWithoutRef<'div'>

export const PageComponent = forwardRef<HTMLDivElement, PageProps>(
  ({ className, ...props }, ref) => {
    const classNames = {
      root: clsx(c.page, className),
    }

    return <div {...props} className={classNames.root} ref={ref} />
  }
)
