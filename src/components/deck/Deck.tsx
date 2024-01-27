import { Link, NavLink } from 'react-router-dom'

import { Sort } from '../../pages/decksPage/DecksPage.tsx'
import { DeckType } from '../../services/decks/decks.types.ts'
import { formatDate } from '../../utils/FormatDateUtils.ts'
import { Table, TableBody, TableCell, TableRow, TableHeader } from '../table'
import { Typography } from '../ui/typography'

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
    key: 'created',
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
            <TableCell>
              <NavLink className={c.link} to={'/#'}>
                <div className={c.coverWrapper}>
                  {deck.cover ? (
                    <>
                      <img className={c.coverImg} src={deck.cover} alt="img" />
                      {deck.name}
                    </>
                  ) : (
                    <>{deck.name}</>
                  )}
                </div>
              </NavLink>
            </TableCell>
            <TableCell>{deck.cardsCount}</TableCell>
            <TableCell>{formatDate(deck.updated)}</TableCell>
            <TableCell>{deck.author.name}</TableCell>
            <TableCell>icons...</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
