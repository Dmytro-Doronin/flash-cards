import { useMemo, useState } from 'react'

import SearchIcon from '../../assets/icons/SearchIcon.tsx'
import { Deck } from '../../components/deck/Deck.tsx'
import { Button } from '../../components/ui/button'
import { Pagination } from '../../components/ui/pagination/Pagination.tsx'
import { SelectComponent } from '../../components/ui/select/SelectComponent.tsx'
import SliderRange from '../../components/ui/slider/SliderRange.tsx'
import { TabSwitcher } from '../../components/ui/tabs/TabSwitcher.tsx'
import { TextField } from '../../components/ui/textField'
import { Typography } from '../../components/ui/typography'
import { useMeQuery } from '../../services/auth/auth.service.ts'
import { useGetDeckQuery } from '../../services/decks/decks.service.ts'
import { deckActions } from '../../state/decksReducer/decksReducer.ts'
import { useAppDispatch, useAppSelector } from '../../store/store.ts'

import c from './decksPage.module.scss'

const tabs = [
  {
    value: 'My Cards',
    text: 'My Cards',
  },
  {
    value: 'All Cards',
    text: 'All Cards',
  },
]

const options = [
  {
    label: '5',
    value: '5',
  },
  {
    label: '7',
    value: '7',
  },
  {
    label: '10',
    value: '10',
  },
]

export type Sort = {
  key: string
  direction: 'asc' | 'desc'
} | null

export const DecksPage = () => {
  const { data: CurrentUser } = useMeQuery()
  const [sort, setSort] = useState<Sort>(null)

  const sortedString = useMemo(() => {
    if (!sort) return undefined

    return `${sort.key}-${sort.direction}`
  }, [sort])

  const dispatch = useAppDispatch()
  const { authorId, currentPage, perPage, currentTab, search, minCard, maxCard } = useAppSelector(
    state => state.decks
  )

  const currentUserId = CurrentUser?.id
  const { data: GetDecksData } = useGetDeckQuery({
    minCardsCount: minCard,
    maxCardsCount: maxCard,
    authorId,
    currentPage,
    itemsPerPage: perPage,
    name: search,
    orderBy: sort ? sortedString : undefined,
  })

  const setCurrenPageHandler = (page: number) => {
    dispatch(deckActions.setCurrentPage(page))
  }
  const setPerPageHandler = (perPage: string) => {
    dispatch(deckActions.setPerPage(+perPage))
  }

  const setSearchHandler = (search: string) => {
    dispatch(deckActions.setSearch(search))
  }

  return (
    <div className={c.page}>
      <div className={c.container}>
        <div className={c.inner}>
          <div className={c.controlBlock}>
            <div className={c.headerControl}>
              <Typography variant="large">Packs list</Typography>
              <Button variant="primary">Add New Pack</Button>
            </div>
            <div className={c.control}>
              <TextField
                onValueChange={setSearchHandler}
                value={search ?? ''}
                Icon={SearchIcon}
                containerProps={c.search}
                placeholder="Input search"
              />
              <TabSwitcher label="Show packs cards" tabs={tabs} />
              <SliderRange
                defaultValue={[1, 10]}
                min={1}
                max={10}
                step={1}
                value={[1, 10]}
                label="Number of cards"
              />
              <Button variant="secondary">Clear Filter</Button>
            </div>
          </div>
        </div>
        <Deck
          currentUserId={CurrentUser?.id ?? ''}
          decks={GetDecksData?.items}
          sort={sort}
          onSort={setSort}
        />
        <div className={c.paginationWrapper}>
          <Pagination
            count={GetDecksData?.pagination?.totalPages || 1}
            onChange={setCurrenPageHandler}
            page={currentPage}
          />
          <div className={c.selectWrapper}>
            <Typography className={c.t1} variant="body1">
              Show
            </Typography>
            <SelectComponent
              className={c.decksSelect}
              defaultValue={perPage.toString()}
              onChange={setPerPageHandler}
              options={options}
              variant="pagination"
            />
            <Typography className={c.t2} variant="body1">
              in page
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}
