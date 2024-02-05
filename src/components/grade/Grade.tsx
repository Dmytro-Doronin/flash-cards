import { StarItem } from '../starItem/StarItem.tsx'

import c from './grade.module.scss'

type GradeType = {
  value: number
  onGradeChange: (gradeValue: number, cardId: string) => void
  paramsId: string
  cardId: string
}

export const Grade = ({ value, onGradeChange, cardId }: GradeType) => {

  return (
    <div className={c.grade}>
      <StarItem onGradeChange={onGradeChange} cardId={cardId} parentValue={value} value={1} />
      <StarItem onGradeChange={onGradeChange} cardId={cardId} parentValue={value} value={2} />
      <StarItem onGradeChange={onGradeChange} cardId={cardId} parentValue={value} value={3} />
      <StarItem onGradeChange={onGradeChange} cardId={cardId} parentValue={value} value={4} />
      <StarItem onGradeChange={onGradeChange} cardId={cardId} parentValue={value} value={5} />
    </div>
  )
}
