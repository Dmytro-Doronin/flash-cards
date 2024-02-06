import { useState } from 'react'

import { Card } from '../../components/ui/card'
import { Typography } from '../../components/ui/typography'

import c from './learnPage.module.scss'
export const LearnPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className={c.learnPage}>
      <div className={c.container}>
        <div className={c.inner}>
          <Card className={c.card}>
            <Typography className={c.textHeader} variant="h1">
              Learn Deck name
            </Typography>
            <Typography className={c.mainText} variant="h3">
              Question: Вопрос
            </Typography>
            <Typography variant=""></Typography>
          </Card>
        </div>
      </div>
    </div>
  )
}
