import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import c from './tableCeil.module.scss'

export const TableCell = forwardRef<ElementRef<'td'>, ComponentPropsWithoutRef<'td'>>(
  ({ className, ...rest }, ref) => {
    const classNames = {
      cell: clsx(className, c.tableCell),
    }

    return <td className={classNames.cell} {...rest} ref={ref} />
  }
)
