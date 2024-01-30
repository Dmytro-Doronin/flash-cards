import { useParams } from 'react-router-dom'

import { CardsTable } from '../../components/deck/CardsTable.tsx'
import { Button } from '../../components/ui/button'
import { Typography } from '../../components/ui/typography'

import c from './deckPage.module.scss'
export const DeckPage = () => {
  const { id } = useParams()

  return (
    <div className={c.page}>
      <div className={c.container}>
        <div className={c.inner}>
          <div className={c.controlPanel}>
            <Typography variant="h1">{'MyDeck' + ' ' + id}</Typography>
            <Button variant="primary">Add New Card</Button>
          </div>
          <CardsTable cards={} />
        </div>
      </div>
    </div>
  )
}
