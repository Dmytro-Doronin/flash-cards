import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import c from './table.module.scss'

export const Table = forwardRef<HTMLTableElement, ComponentPropsWithoutRef<'table'>>(
  ({ className, ...rest }, ref) => {
    const classNames = {
      table: clsx(className, c.table),
    }

    return <table className={classNames.table} {...rest} ref={ref} />
  }
)
