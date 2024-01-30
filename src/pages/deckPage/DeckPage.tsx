import { useParams } from 'react-router-dom'

import { CardsTable } from '../../components/deck/CardsTable.tsx'
import { Button } from '../../components/ui/button'
import { Pagination } from '../../components/ui/pagination/Pagination.tsx'
import { Typography } from '../../components/ui/typography'
import { useGetAllCardsQuery } from '../../services/decks/decks.service.ts'
import { cardActions } from '../../state/cardReducer/cardReducer.ts'
import { useAppDispatch, useAppSelector } from '../../store/store.ts'

import c from './deckPage.module.scss'
import { useMemo, useState } from "react";
import { Sort } from "../decksPage/DecksPage.tsx";

export const DeckPage = () => {
  const dispatch = useAppDispatch()
  const [sort, setSort] = useState<Sort>(null)
  const { id } = useParams()
  const sortedString = useMemo(() => {
    if (!sort) return undefined

    return `${sort.key}-${sort.direction}`
  }, [sort])
  
  const { currentPage } = useAppSelector(state => state.card)
  const { data: cardData } = useGetAllCardsQuery({
    id: id ?? '',
    params: {
      currentPage,
      orderBy: sortedString,
    },
  })

  const setCurrenPageHandler = (page: number) => {
    dispatch(cardActions.setCurrentPage(page))
  }

  return (
    <div className={c.page}>
      <div className={c.container}>
        <div className={c.inner}>
          <div className={c.controlPanel}>
            <Typography variant="h1">{'MyDeck' + ' ' + id}</Typography>
            <Button variant="primary">Add New Card</Button>
          </div>
          <CardsTable onSort={setSort} sort={sort} cards={cardData?.items} />
          <Pagination
            count={cardData?.pagination?.totalPages || 1}
            onChange={setCurrenPageHandler}
            page={currentPage}
          />
        </div>
      </div>
    </div>
  )
}
