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
import { useGetDeckQuery, useGetMaxAndMinDeckQuery } from '../../services/decks/decks.service.ts'
// import { Tab } from '../../services/decks/decks.types.ts'
import { deckActions } from '../../state/decksReducer/decksReducer.ts'
import { useAppDispatch, useAppSelector } from '../../store/store.ts'

import c from './decksPage.module.scss'

const tabs = [
  {
    value: 'all',
    text: 'All Cards',
  },
  {
    value: 'my',
    text: 'My Cards',
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
  const { currentPage, perPage, currentTab, search, minCard, maxCard } = useAppSelector(
    state => state.decks
  )

  const currentUserId = CurrentUser?.id
  const authorId = currentTab === 'my' ? currentUserId : undefined
  const { data: GetDecksData } = useGetDeckQuery({
    authorId,
    minCardsCount: minCard,
    maxCardsCount: maxCard,
    currentPage,
    itemsPerPage: perPage,
    name: search,
    orderBy: sort ? sortedString : undefined,
  })

  const { data: minMaxData } = useGetMaxAndMinDeckQuery()
  const [rangeValue, setRangeValue] = useState([0, GetDecksData?.maxCardsCount])

  const setCurrenPageHandler = (page: number) => {
    dispatch(deckActions.setCurrentPage(page))
  }
  const setPerPageHandler = (perPage: string) => {
    dispatch(deckActions.setPerPage(+perPage))
  }

  const setSearchHandler = (search: string) => {
    dispatch(deckActions.resetCurrentPage())
    dispatch(deckActions.setSearch(search))
  }

  const setTabHandler = (tab: string) => {
    dispatch(deckActions.resetCurrentPage())
    dispatch(deckActions.setCurrentTab({ tab }))
  }

  // const setRangeSliderHandler = (values: number[]) => {
  //   dispatch(deckActions.setMinCard(values[0]))
  //   dispatch(deckActions.setMaxCard(values[1]))
  // }
  const handleSliderCommitted = (value: number[]) => {
    dispatch(deckActions.setCurrentPage(1))
    dispatch(deckActions.setMinCard(value[0]))
    dispatch(deckActions.setMaxCard(value[1]))
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
                value={search}
                Icon={SearchIcon}
                containerProps={c.search}
                placeholder="Input search"
              />
              <TabSwitcher
                onValueChange={setTabHandler}
                value={currentTab}
                label="Show packs cards"
                tabs={tabs}
              />
              <SliderRange
                min={0}
                max={minMaxData?.max}
                // value={rangeValue}
                value={rangeValue}
                onValueChange={setRangeValue}
                onValueCommit={handleSliderCommitted}
                label="Number of cards"
              />
              <Button variant="secondary">Clear Filter</Button>
            </div>
          </div>
        </div>
        {GetDecksData?.items.length === 0 ? (
          <div className={c.decksWrapper}>
            <Typography className={c.alert} variant="h1">
              Can't find any pack
            </Typography>
          </div>
        ) : (
          <div className={c.decksWrapper}>
            <Deck
              currentUserId={currentUserId ?? ''}
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
        )}
      </div>
    </div>
  )
}
