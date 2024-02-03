import { useMemo, useState } from 'react'

import { useParams } from 'react-router-dom'

import { AddCardModal } from '../../components/cardsModals/addCardModal/AddCardModal.tsx'
import { CardsTable } from '../../components/cardsTable/CardsTable.tsx'
import { Button } from '../../components/ui/button'
import { Pagination } from '../../components/ui/pagination/Pagination.tsx'
import { Typography } from '../../components/ui/typography'
import { useMeQuery } from '../../services/auth/auth.service.ts'
import {
  useAddNewCardMutation,
  useGetAllCardsQuery,
  useGetDeckByIdQuery,
} from '../../services/decks/decks.service.ts'
import { cardActions } from '../../state/cardReducer/cardReducer.ts'
import { useAppDispatch, useAppSelector } from '../../store/store.ts'
import { Sort } from '../decksPage/DecksPage.tsx'

import c from './deckPage.module.scss'

export const DeckPage = () => {
  const dispatch = useAppDispatch()
  const [sort, setSort] = useState<Sort>(null)
  const [openCreateModal, setOpenCreateModal] = useState(false)
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
  const [addNewCard] = useAddNewCardMutation()
  const currentUserId = currentUserData?.id
  const currentDeckId = currentDeck?.userId

  const openCreateModalHandler = () => setOpenCreateModal(true)
  const setCurrenPageHandler = (page: number) => {
    dispatch(cardActions.setCurrentPage(page))
  }

  return (
    <div className={c.page}>
      <div className={c.container}>
        <div className={c.inner}>
          <AddCardModal
            onCancel={() => setOpenCreateModal(false)}
            paramsId={paramsId ?? ''}
            onConfirm={addNewCard}
            open={openCreateModal}
            onOpenChange={setOpenCreateModal}
          />
          <div className={c.controlPanel}>
            <Typography variant="h1">
              {currentUserId === currentDeckId ? 'My Pack' : 'Friends Pack'}
            </Typography>
            {currentUserId === currentDeckId ? (
              <Button onClick={openCreateModalHandler} variant="primary">
                Add New Card
              </Button>
            ) : (
              <Button variant="primary">Learn to deck</Button>
            )}
          </div>
          {cardData?.items.length === 0 ? (
            <div className={c.cardWrapper}>
              <Typography className={c.alert} variant="h1">
                Con`t find any card
              </Typography>
            </div>
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
