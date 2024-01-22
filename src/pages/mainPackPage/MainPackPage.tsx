import { useState } from 'react'

import SearchIcon from '../../assets/icons/SearchIcon.tsx'
import { Deck } from '../../components/deck/Deck.tsx'
import { Button } from '../../components/ui/button'
import SliderRange from '../../components/ui/slider/SliderRange.tsx'
import { TabSwitcher } from '../../components/ui/tabs/TabSwitcher.tsx'
import { TextField } from '../../components/ui/textField'
import { Typography } from '../../components/ui/typography'
import { useMeQuery } from '../../services/auth/auth.service.ts'
import { useGetDeckQuery } from '../../services/decks/decks.service.ts'

import c from './mainPackPage.module.scss'
import { Pagination } from "../../components/ui/pagination/Pagination.tsx";

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

export type Sort = {
  key: string
  direction: 'asc' | 'desc'
} | null

export const MainPackPage = () => {
  const [sort, setSort] = useState<Sort>(null)

  const { data: GetDecksData } = useGetDeckQuery()
  const { data: CurrentUser } = useMeQuery()

  // const sortedString = useMemo(() => {
  //   if (!sort) return null
  //
  //   return `${sort.key}-${sort.direction}`
  // }, [sort])

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
              <TextField Icon={SearchIcon} containerProps={c.search} placeholder="Input search" />
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
        {/*<Pagination count={GetDecksData?.pagination?.totalPages || 1} onChange={} page={}/>*/}
      </div>
    </div>
  )
}
