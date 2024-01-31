import { StarItem } from '../starItem/StarItem.tsx'

import c from './grade.module.scss'


type GradeType = {
  value: number
  onGradeChange?: (gradeValue: number) => void
}

export const Grade = ({ value, onGradeChange }: GradeType) => {
  return (
    <div className={c.grade}>
      <StarItem onGradeChange={onGradeChange} parentValue={value} value={1} />
      <StarItem onGradeChange={onGradeChange} parentValue={value} value={2} />
      <StarItem onGradeChange={onGradeChange} parentValue={value} value={3} />
      <StarItem onGradeChange={onGradeChange} parentValue={value} value={4} />
      <StarItem onGradeChange={onGradeChange} parentValue={value} value={5} />
    </div>
  )
}
