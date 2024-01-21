import { useMemo, useState } from 'react'

import { TableHead } from '../tableHead/TableHead.tsx'

import c from './deck.module.scss'

const data = [
  {
    title: 'Project A',
    cardsCount: 10,
    updated: '2023-07-07',
    createdBy: 'John Doe',
  },
  {
    title: 'Project B',
    cardsCount: 5,
    updated: '2023-07-06',
    createdBy: 'Jane Smith',
  },
  {
    title: 'Project C',
    cardsCount: 8,
    updated: '2023-07-05',
    createdBy: 'Alice Johnson',
  },
  {
    title: 'Project D',
    cardsCount: 3,
    updated: '2023-07-07',
    createdBy: 'Bob Anderson',
  },
  {
    title: 'Project E',
    cardsCount: 12,
    updated: '2023-07-04',
    createdBy: 'Emma Davis',
  },
]

const columns = [
  {
    key: 'name',
    title: 'Name',
  },
  {
    key: 'cardsCount',
    title: 'Cards',
  },
  {
    key: 'updated',
    title: 'Last Updated',
  },
  {
    key: 'createdBy',
    title: 'Created by',
  },
]

type Sort = {
  key: string
  direction: 'asc' | 'desc'
} | null

export const Deck = () => {
  const [sort, setSort] = useState<Sort>(null)

  const sortedString = useMemo(() => {
    if (!sort) return null

    return `${sort.key}-${sort.direction}`
  }, [sort])
  // const handleSort = (key: string) => {
  //   if (sort && sort.key === key) {
  //     setSort({
  //       key,
  //       direction: sort.direction === 'asc' ? 'desc' : 'asc',
  //     })
  //   } else {
  //     setSort({
  //       key,
  //       direction: 'asc',
  //     })
  //   }
  // }

  return (
    <table className={c.table}>
      <TableHead columns={columns} sort={sort} onSort={setSort} />
      <tbody className={c.tbody}>
        {data.map(item => (
          <tr className={c.tr} key={item.title}>
            <td className={c.td}>{item.title}</td>
            <td className={c.td}>{item.cardsCount}</td>
            <td className={c.td}>{item.updated}</td>
            <td className={c.td}>{item.createdBy}</td>
            <td className={c.td}>icons...</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
