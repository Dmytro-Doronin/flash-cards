import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import c from './tableHeadCeil.module.scss'

export const TableHeadCell = forwardRef<ElementRef<'th'>, ComponentPropsWithoutRef<'th'>>(
  ({ children, className, ...rest }, ref) => {
    const classNames = {
      headCell: clsx(className, c.headCell),
    }

    return (
      <th className={classNames.headCell} {...rest} ref={ref}>
        <span>{children}</span>
      </th>
    )
  }
)