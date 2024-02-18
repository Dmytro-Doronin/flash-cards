import { ComponentPropsWithoutRef, FC } from 'react'

import ArrowDown from '../../../assets/icons/ArrowDown.tsx'
import ArrowUp from '../../../assets/icons/ArrowUp.tsx'
import { TableHead } from '../tableHead/TableHead.tsx'
import { TableHeadCell } from '../tableHeadCeil/TableHeadCeil.tsx'
import { TableRow } from '../tableRow/TableRow.tsx'

import c from './tableHeader.module.scss'

type Column = {
  key: string
  title: string
}

type Sort = {
  key: string
  direction: 'asc' | 'desc'
} | null

export const TableHeader: FC<
  Omit<
    ComponentPropsWithoutRef<'thead'> & {
      columns: Column[]
      sort?: Sort
      onSort?: (sort: Sort) => void
      last?: boolean
    },
    'children'
  >
> = ({ columns, sort, onSort, last, ...restProps }) => {
  const handleSort = (key: string) => {
    if (!onSort) return

    if (sort?.key !== key) return onSort({ key, direction: 'asc' })

    if (sort.direction === 'desc') return onSort(null)

    return onSort({
      key,
      direction: sort?.direction === 'asc' ? 'desc' : 'asc',
    })
  }

  return (
    <TableHead className={c.thead} {...restProps}>
      <TableRow className={c.thr}>
        {columns.map(({ title, key }) => (
          <TableHeadCell className={c.th} onClick={() => handleSort(key)} key={key}>
            {title}
            {sort && sort.key === key && (
              <span>{sort.direction === 'asc' ? <ArrowUp /> : <ArrowDown />}</span>
            )}
          </TableHeadCell>
        ))}
        {!last && <TableHeadCell></TableHeadCell>}
      </TableRow>
    </TableHead>
  )
}
