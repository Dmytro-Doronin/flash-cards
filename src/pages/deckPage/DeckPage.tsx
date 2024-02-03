import { useMemo, useState } from 'react'

import { useParams } from 'react-router-dom'

import { CardsTable } from '../../components/deck/CardsTable.tsx'
import { Button } from '../../components/ui/button'
import { Pagination } from '../../components/ui/pagination/Pagination.tsx'
import { Typography } from '../../components/ui/typography'
import { useMeQuery } from '../../services/auth/auth.service.ts'
import { useGetAllCardsQuery, useGetDeckByIdQuery } from '../../services/decks/decks.service.ts'
import { cardActions } from '../../state/cardReducer/cardReducer.ts'
import { useAppDispatch, useAppSelector } from '../../store/store.ts'
import { Sort } from '../decksPage/DecksPage.tsx'

import c from './deckPage.module.scss'

export const DeckPage = () => {
  const dispatch = useAppDispatch()
  const [sort, setSort] = useState<Sort>(null)

  const { id: paramsId } = useParams()
  const sortedString = useMemo(() => {
    if (!sort) return undefined

    return `${sort.key}-${sort.direction}`
  }, [sort])
  const { data: currentUserData } = useMeQuery()
  const { currentPage } = useAppSelector(state => state.card)
  const { data: cardData } = useGetAllCardsQuery({
    id: paramsId ?? '',
    params: {
      currentPage,
      orderBy: sortedString,
    },
  })
  const { data: currentDeck } = useGetDeckByIdQuery({ id: paramsId ?? '' })
  const currentUserId = currentUserData?.id
  const currentDeckId = currentDeck?.userId

  console.log(currentUserId, currentDeck, paramsId)

  const setCurrenPageHandler = (page: number) => {
    dispatch(cardActions.setCurrentPage(page))
  }

  return (
    <div className={c.page}>
      <div className={c.container}>
        <div className={c.inner}>
          <div className={c.controlPanel}>
            <Typography variant="h1">
              {currentUserId === currentDeckId ? 'My Pack' : 'Friends Pack'}
            </Typography>
            {currentUserId === currentDeckId ? (
              <Button variant="primary">Add New Card</Button>
            ) : (
              <Button variant="primary">Learn to deck</Button>
            )}
          </div>
          {cardData?.items.length === 0 ? (
            <Typography variant="h1"> Con`t find any card</Typography>
          ) : (
            <>
              <CardsTable onSort={setSort} sort={sort} cards={cardData?.items} />
              <Pagination
                count={cardData?.pagination?.totalPages || 1}
                onChange={setCurrenPageHandler}
                page={currentPage}
              />
            </>
          )}
        </div>
      </div>
    </div>
  )
}
