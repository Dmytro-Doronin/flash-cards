import { useState } from 'react'

import img from '../../assets/images/404.png'
import { AnsQue } from '../../components/ansQue/ansQue.tsx'
import { Button } from '../../components/ui/button'
import { Card } from '../../components/ui/card'
import { RadioGroup } from '../../components/ui/radioGroup/RadioGroupComponent.tsx'
import { Typography } from '../../components/ui/typography'
import { options } from '../../mockData/rate.ts'

import c from './learnPage.module.scss'

export const LearnPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [rate, setRate] = useState<string>('1')

  const onValueChange = (value: string) => {
    setRate(value)
  }

  return (
    <div className={c.learnPage}>
      <div className={c.container}>
        <div className={c.inner}>
          <Card className={c.card}>
            <div className={c.visibleContent}>
              <Typography className={c.textHeader} variant="h1">
                Learn Deck name
              </Typography>
              <AnsQue img={img} headerText="Question" text="asdasdasdasdasdasdasd" />
              <Typography className={c.attempts} variant="body2">
                Number of attempts to answer the question: 1
              </Typography>
            </div>
            {isOpen && (
              <div className={c.hiddenContent}>
                <AnsQue img={img} headerText="Answer" text="asdasdasdasdasdasdasd" />
                <div className={c.rateGroup}>
                  <Typography className={c.rateTittle} variant="subtitle1">
                    Rate yourself:
                  </Typography>
                  <div className={c.checkboxBoxGroup}>
                    <RadioGroup value={rate} onValueChange={onValueChange} options={options} />
                  </div>
                </div>
              </div>
            )}
            <div className={c.buttonGroup}>
              {!isOpen ? (
                <Button onClick={() => setIsOpen(true)} fullWidth>
                  Show answer
                </Button>
              ) : (
                <Button fullWidth>Next question</Button>
              )}
              <Button variant="secondary" fullWidth>
                End study
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
