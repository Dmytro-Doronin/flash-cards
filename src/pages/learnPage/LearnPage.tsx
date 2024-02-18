import { useState } from 'react'

import { NavLink, useParams } from 'react-router-dom'

import { AlertSnackbar } from '../../components/alertSnackbar/AlertSnackbar.tsx'
import { AnsQue } from '../../components/ansQue/ansQue.tsx'
import { Loader } from '../../components/loader/Loader.tsx'
import { Button } from '../../components/ui/button'
import { Card } from '../../components/ui/card'
import { RadioGroup } from '../../components/ui/radioGroup/RadioGroupComponent.tsx'
import { Typography } from '../../components/ui/typography'
import { options } from '../../mockData/rate.ts'
import { pathVariables } from '../../route/pathVariables.ts'
import {
  useChangeGradeCardMutation,
  useGetLearnCardsQuery,
} from '../../services/decks/decks.service.ts'

import c from './learnPage.module.scss'

export const LearnPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [rate, setRate] = useState<string>('1')
  const { id: paramsId } = useParams()
  const {
    data: learnCardData,
    isLoading,
    error: getLearnCardsError,
  } = useGetLearnCardsQuery({ id: paramsId ?? '' })
  const [updateGrade, { error: changeGradeCardError }] = useChangeGradeCardMutation()

  const onValueChange = (value: string) => {
    setRate(value)
  }

  const onGradeChangeHandler = () => {
    updateGrade({ id: paramsId ?? '', data: { grade: +rate, cardId: learnCardData?.id ?? '' } })
    setIsOpen(false)
  }

  if (isLoading) {
    return <Loader variant="main" />
  }

  return (
    <div className={c.learnPage}>
      <div className={c.container}>
        <div className={c.inner}>
          {learnCardData !== undefined && Object.keys(learnCardData).length !== 0 ? (
            <Card className={c.card}>
              <div className={c.visibleContent}>
                <Typography className={c.textHeader} variant="h1">
                  Learn Deck name
                </Typography>
                <AnsQue
                  img={learnCardData?.questionImg ?? ''}
                  headerText="Question"
                  text={learnCardData?.question ?? ''}
                />
                <Typography className={c.attempts} variant="body2">
                  Number of attempts to answer the question: {learnCardData?.shots}
                </Typography>
              </div>
              {isOpen && (
                <div className={c.hiddenContent}>
                  <AnsQue
                    img={learnCardData?.answerImg ?? ''}
                    headerText="Answer"
                    text={learnCardData?.answer ?? ''}
                  />
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
                  <Button onClick={onGradeChangeHandler} fullWidth>
                    Next question
                  </Button>
                )}
                <NavLink to={`/decks/${paramsId}`}>
                  <Button variant="secondary" fullWidth>
                    End study
                  </Button>
                </NavLink>
              </div>
            </Card>
          ) : (
            <div className={c.alertWrapper}>
              <Typography className={c.noText} variant="h2">
                There are no cards in the deck.
              </Typography>
              <NavLink to={pathVariables.MAIN}>
                <Button variant="secondary">Back to main page</Button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
      {getLearnCardsError && <AlertSnackbar variant="error" message={getLearnCardsError} />}
      {changeGradeCardError && <AlertSnackbar variant="error" message={changeGradeCardError} />}
    </div>
  )
}
