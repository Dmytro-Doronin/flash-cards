import { ComponentPropsWithoutRef, FC } from 'react'

type Column = {
  key: string
  title: string
}

type Sort = {
  key: string
  direction: 'asc' | 'desc'
} | null

export const TableHead: FC<
  Omit<
    ComponentPropsWithoutRef<'thead'> & {
      columns: Column[]
      sort?: Sort
      onSort?: (sort: Sort) => void
    },
    'children'
  >
> = ({ columns, sort, onSort, ...restProps }) => {
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
    <thead {...restProps}>
      <tr>
        {columns.map(({ title, key }) => (
          <th onClick={() => handleSort(title)} key={key}>
            {title}
          </th>
        ))}
        <th></th>
      </tr>
    </thead>
  )
}
