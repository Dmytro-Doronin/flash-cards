import { useMemo, useState } from 'react'

import SearchIcon from '../../assets/icons/SearchIcon.tsx'
import { DeckModal } from '../../components/deckModals/addDeckModal/DeckModal.tsx'
import { DeleteDeckModal } from '../../components/deckModals/deleteDeckModal/DeleteDeckModal.tsx'
import { Decks } from '../../components/decks/Decks.tsx'
import { Button } from '../../components/ui/button'
import { Pagination } from '../../components/ui/pagination/Pagination.tsx'
import { SelectComponent } from '../../components/ui/select/SelectComponent.tsx'
import SliderRange from '../../components/ui/slider/SliderRange.tsx'
import { TabSwitcher } from '../../components/ui/tabs/TabSwitcher.tsx'
import { TextField } from '../../components/ui/textField'
import { Typography } from '../../components/ui/typography'
import { useMeQuery } from '../../services/auth/auth.service.ts'
import {
  useAddNewDeckMutation,
  useDeleteDeckMutation,
  useEditDeckMutation,
  useGetDeckQuery,
  useGetMaxAndMinDeckQuery,
} from '../../services/decks/decks.service.ts'
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
  const [openCreateModal, setOpenCreateModal] = useState(false)
  const [deleteDeckId, setDeleteDeckId] = useState<string | null>(null)
  const [editDeckId, setEditDeckId] = useState<string | null>(null)
  const showConfirmDeleteDeckId = !!deleteDeckId
  const showConfirmEditDeckId = !!editDeckId
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
  const deckName = GetDecksData?.items?.find(item => item.id === deleteDeckId)
  const { data: minMaxData } = useGetMaxAndMinDeckQuery()
  const [addNewDeck] = useAddNewDeckMutation()
  const [deleteDeck] = useDeleteDeckMutation()
  const [editDeck] = useEditDeckMutation()
  const [rangeValue, setRangeValue] = useState([0, GetDecksData?.maxCardsCount])
  const openCreateModalHandler = () => setOpenCreateModal(true)

  const resetFilter = () => {
    dispatch(deckActions.setCurrentPage(1))
    dispatch(deckActions.setSearch(''))
    dispatch(deckActions.setCurrentTab({ tab: 'all' }))
    dispatch(deckActions.setMinCard(0))
    dispatch(deckActions.setMaxCard(undefined))
    setRangeValue([0, minMaxData?.max ?? undefined])
  }
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

  const onDeleteConfirm = () => {
    deleteDeck({ id: deleteDeckId ?? '' })
    setDeleteDeckId(null)
  }

  const onEditConfirm = (data: FormData) => {
    if (!editDeckId) {
      return
    }
    editDeck({ id: editDeckId, FormData: data })
    setEditDeckId(null)
  }

  return (
    <div className={c.page}>
      <div className={c.container}>
        <div className={c.inner}>
          <DeckModal
            title="Add New Deck"
            onCancel={() => setOpenCreateModal(false)}
            onConfirm={addNewDeck}
            open={openCreateModal}
            onOpenChange={setOpenCreateModal}
          />
          <DeckModal
            title="Edit Deck"
            onCancel={() => setEditDeckId(null)}
            onConfirm={onEditConfirm}
            open={showConfirmEditDeckId}
            onOpenChange={() => setEditDeckId(null)}
          />
          <DeleteDeckModal
            onOpenChange={() => setDeleteDeckId(null)}
            open={showConfirmDeleteDeckId}
            onCancel={() => setDeleteDeckId(null)}
            onConfirm={onDeleteConfirm}
            deckName={deckName?.name ?? 'Selected decks'}
          />
          <div className={c.controlBlock}>
            <div className={c.headerControl}>
              <Typography variant="large">Packs list</Typography>
              <Button onClick={openCreateModalHandler} variant="primary">
                Add New Pack
              </Button>
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
              <Button onClick={resetFilter} variant="secondary">
                Clear Filter
              </Button>
            </div>
          </div>
        </div>
        {GetDecksData?.items.length === 0 ? (
          <div className={c.decksWrapper}>
            <Typography className={c.alert} variant="h1">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Can't find any pack
            </Typography>
          </div>
        ) : (
          <div className={c.decksWrapper}>
            <Decks
              onEditDeck={setEditDeckId}
              onSetDeleteDeckId={setDeleteDeckId}
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
