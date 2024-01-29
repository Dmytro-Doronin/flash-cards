import { NavLink } from 'react-router-dom'

import EditIcon from '../../assets/icons/Edit.tsx'
import PlayIcon from '../../assets/icons/PlayIcon.tsx'
import TrashIcon from '../../assets/icons/Trash.tsx'
import { Sort } from '../../pages/decksPage/DecksPage.tsx'
import { DeckType } from '../../services/decks/decks.types.ts'
import { formatDate } from '../../utils/FormatDateUtils.ts'
import { Table, TableBody, TableCell, TableRow, TableHeader } from '../table'
// import { Button } from '../ui/button'

import { Button } from '../ui/button'

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
  onSetDeleteDeckId: (id: string) => void
  onEditDeck: (id: string) => void
}

export const Deck = ({
  decks,
  currentUserId,
  sort,
  onSort,
  onSetDeleteDeckId,
  onEditDeck,
}: DeckComponentType) => {
  const onDeleteHandler = (id: string) => onSetDeleteDeckId(id)
  const onEditHandler = (id: string) => onEditDeck(id)

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
            <TableCell>
              <div className={c.iconWrapper}>
                <NavLink to="/#">
                  <PlayIcon />
                </NavLink>

                {deck.author.id === currentUserId && (
                  <>
                    <Button variant="icon" onClick={() => onEditHandler(deck.id)}>
                      <EditIcon />
                    </Button>
                    <Button variant="icon" onClick={() => onDeleteHandler(deck.id)}>
                      <TrashIcon />
                    </Button>
                  </>
                )}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
