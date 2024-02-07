import Edit from '../../assets/icons/Edit.tsx'
import Trash from '../../assets/icons/Trash.tsx'
import { Sort } from '../../pages/decksPage/DecksPage.tsx'
import { Card } from '../../services/decks/decks.types.ts'
import { formatDate } from '../../utils/FormatDateUtils.ts'
import { Grade } from '../grade/Grade.tsx'
import { Table, TableBody, TableCell, TableHeader, TableRow } from '../table'
import { Button } from '../ui/button'

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
  currentUserId: string
  onEditCard: (id: string) => void
  onDeleteCard: (id: string) => void
  paramsId: string
}

export const CardsTable = ({
  cards,
  onSort,
  sort,
  onEditCard,
  onDeleteCard,
  currentUserId,
}: DeckType) => {
  const onEditCardHandler = (id: string) => onEditCard(id)
  const onDeleteCardHandler = (id: string) => onDeleteCard(id)

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
            {currentUserId === card.userId && (
              <TableCell>
                <div className={c.buttonGroup}>
                  <Button onClick={() => onEditCardHandler(card.id)} variant="icon">
                    <Edit />
                  </Button>
                  <Button onClick={() => onDeleteCardHandler(card.id)} variant="icon">
                    <Trash />
                  </Button>
                </div>
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
