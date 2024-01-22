import { Sort } from '../../pages/mainPackPage/MainPackPage.tsx'
import { DeckType } from '../../services/decks/decks.types.ts'
import { Table, TableBody, TableCell, TableRow, TableHeader } from '../table'

import c from './deck.module.scss'

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

type DeckComponentType = {
  currentUserId: string
  decks: DeckType[] | undefined
  onSort: (key: Sort) => void
  sort: Sort
}

export const Deck = ({ decks, currenUserId, sort, onSort }: DeckComponentType) => {
  return (
    <Table>
      <TableHeader columns={columns} sort={sort} onSort={onSort} />
      <TableBody>
        {decks?.map(deck => (
          <TableRow key={deck.id} className={c.tr}>
            <TableCell>{deck.author.name}</TableCell>
            <TableCell>{deck.cardsCount}</TableCell>
            <TableCell>{deck.updated}</TableCell>
            <TableCell>{deck.author.name}</TableCell>
            <TableCell>icons...</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
