import { Card } from '../../services/decks/decks.types.ts'
import { formatDate } from '../../utils/FormatDateUtils.ts'
import { Table, TableBody, TableCell, TableHeader, TableRow } from '../table'

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
  cards: Card[]
}

export const CardsTable = ({ cards }: DeckType) => {
  return (
    <Table>
      <TableHeader columns={columns} />
      <TableBody>
        {cards?.map(card => (
          <TableRow key={card.id}>
            <TableCell>{card.question}</TableCell>
            <TableCell>{card.answer}</TableCell>
            <TableCell>{formatDate(card.updated)}</TableCell>
            <TableCell>{card.grade}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
