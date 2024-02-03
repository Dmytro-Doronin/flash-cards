import { NavLink } from 'react-router-dom'

import PlayIcon from '../../assets/icons/PlayIcon.tsx'
import { Sort } from '../../pages/decksPage/DecksPage.tsx'
import { Card } from '../../services/decks/decks.types.ts'
import { formatDate } from '../../utils/FormatDateUtils.ts'
import { Grade } from '../grade/Grade.tsx'
import { Table, TableBody, TableCell, TableHeader, TableRow } from '../table'

import c from './cardsTable.module.scss'

const columns = [
  {
    key: 'question',
    sortable: true,
    title: 'Question',
  },
  {
    key: 'answer',
    sortable: true,
    title: 'Answer',
  },
  {
    key: 'updated',
    sortable: true,
    title: 'Last Updated',
  },
  {
    key: 'grade',
    sortable: true,
    title: 'Grade',
  },
]

type DeckType = {
  cards: Card[] | undefined
  onSort: (key: Sort) => void
  sort: Sort
}

export const CardsTable = ({ cards, onSort, sort }: DeckType) => {
  return (
    <Table>
      <TableHeader onSort={onSort} sort={sort} columns={columns} />
      <TableBody>
        {cards?.map(card => (
          <TableRow key={card.id}>
            {card.questionImg ? (
              <TableCell className={c.imgWrapper}>
                <img className={c.img} src={card.questionImg} alt="picture" />
              </TableCell>
            ) : (
              <TableCell>{card.question}</TableCell>
            )}
            {card.answerImg ? (
              <TableCell className={c.imgWrapper}>
                <img className={c.img} src={card.answerImg} alt="picture" />
              </TableCell>
            ) : (
              <TableCell>{card.answer}</TableCell>
            )}
            <TableCell>{formatDate(card.updated)}</TableCell>
            <TableCell>
              <Grade value={card.grade} />
            </TableCell>
            <TableCell>
              <NavLink to="/#">
                <PlayIcon />
              </NavLink>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
