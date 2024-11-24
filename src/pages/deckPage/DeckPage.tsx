import { useMemo, useState } from 'react'

import { NavLink, useParams } from 'react-router-dom'

import SearchIcon from '../../assets/icons/SearchIcon.tsx'
import { AlertSnackbar } from '../../components/alertSnackbar/AlertSnackbar.tsx'
import { CardModal } from '../../components/cardsModals/cardModal/CardModal.tsx'
import { DeleteCardModal } from '../../components/cardsModals/deleteCardModal/DeleteCardModal.tsx'
import { CardsTable } from '../../components/cardsTable/CardsTable.tsx'
import { DebounceTextField } from '../../components/debounceTextfield/DebounceTextField.tsx'
import { Loader } from '../../components/loader/Loader.tsx'
import { Button } from '../../components/ui/button'
import { Pagination } from '../../components/ui/pagination/Pagination.tsx'
import { Typography } from '../../components/ui/typography'
import { useMeQuery } from '../../services/auth/auth.service.ts'
import {
  useAddNewCardMutation,
  useDeleteCardMutation,
  useEditCardMutation,
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
  const [editCardId, setEditCardId] = useState<string | null>(null)
  const [deleteCardId, setDeleteCardId] = useState<string | null>(null)
  const { id: paramsId } = useParams()
  const sortedString = useMemo(() => {
    if (!sort) return undefined

    return `${sort.key}-${sort.direction}`
  }, [sort])
  const { data: currentUserData } = useMeQuery()
  const { currentPage, search } = useAppSelector(state => state.card)
  const {
    data: cardData,
    isLoading,
    error: getAllCardError,
  } = useGetAllCardsQuery({
    id: paramsId ?? '',
    params: {
      currentPage,
      orderBy: sortedString,
      question: search,
    },
  })
  const { data: currentDeck, error: getDeckById } = useGetDeckByIdQuery({ id: paramsId ?? '' })
  const [addNewCard] = useAddNewCardMutation()
  const [editCard] = useEditCardMutation()
  const [deleteCard] = useDeleteCardMutation()
  // const [updateGrade] = useChangeGradeCardMutation()
  const currentUserId = currentUserData?.id
  const currentDeckId = currentDeck?.userId
  const showConfirmEditCard = !!editCardId
  const showConfirmDeleteCard = !!deleteCardId
  const cardName = cardData?.items.find(item => item.id === deleteCardId)
  const openCreateModalHandler = () => setOpenCreateModal(true)
  const setCurrenPageHandler = (page: number) => {
    dispatch(cardActions.setCurrentPage(page))
  }

  const onEditCard = (data: { id: string; FormData: FormData }) => {
    if (!editCardId) {
      return
    }
    editCard({ id: editCardId, data: data.FormData })
    setEditCardId(null)
  }

  const onDeleteCard = () => {
    deleteCard({ id: deleteCardId ?? '' })
    setDeleteCardId(null)
  }

  // const onGradeChangeHandler = (gradeValue: number, cardId: string) => {
  //   updateGrade({ id: paramsId ?? '', data: { grade: gradeValue, cardId: cardId } })
  // }

  const setSearchHandler = (value: string) => {
    dispatch(cardActions.setSearch(value))
  }

  if (isLoading) {
    return <Loader variant="main" />
  }

  return (
    <div className={c.page}>
      <div className={c.container}>
        <div className={c.inner}>
          <CardModal
            title="Add New Card"
            onCancel={() => setOpenCreateModal(false)}
            paramsId={paramsId ?? ''}
            onConfirm={addNewCard}
            open={openCreateModal}
            onOpenChange={setOpenCreateModal}
          />
          <CardModal
            title="Edit card"
            onCancel={() => setEditCardId(null)}
            paramsId={paramsId ?? ''}
            onConfirm={onEditCard}
            open={showConfirmEditCard}
            onOpenChange={() => setEditCardId(null)}
          />
          <DeleteCardModal
            onOpenChange={() => setDeleteCardId(null)}
            open={showConfirmDeleteCard}
            onCancel={() => setDeleteCardId(null)}
            onConfirm={onDeleteCard}
            cardName={cardName?.id ?? 'Selected card'}
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
              cardData?.items.length !== 0 && (
                <NavLink to={`/learn/${paramsId}`}>
                  <Button variant="primary">Learn to deck</Button>
                </NavLink>
              )
            )}
          </div>
          {cardData?.items.length === 0 ? (
            <div className={c.cardWrapper}>
              <Typography className={c.alert} variant="h1">
                Can`t find any card
              </Typography>
              {currentUserId === currentDeckId && cardData?.items.length !== 0 && (
                <NavLink to={`/learn/${paramsId}`}>
                  <Button variant="primary">Learn to deck</Button>
                </NavLink>
              )}
            </div>
          ) : (
            <>
              <DebounceTextField
                onValueChange={setSearchHandler}
                Icon={SearchIcon}
                containerProps={c.search}
                placeholder="Input search"
              />
              <CardsTable
                onEditCard={setEditCardId}
                onDeleteCard={setDeleteCardId}
                onSort={setSort}
                currentUserId={currentUserData?.id ?? ''}
                sort={sort}
                last
                cards={cardData?.items}
                paramsId={paramsId ?? ''}
              />
              <Pagination
                count={cardData?.pagination?.totalPages || 1}
                onChange={setCurrenPageHandler}
                page={currentPage}
              />
            </>
          )}
        </div>
      </div>
      {getAllCardError && <AlertSnackbar variant="error" message={getAllCardError} />}
      {getDeckById && <AlertSnackbar variant="error" message={getDeckById} />}
    </div>
  )
}
