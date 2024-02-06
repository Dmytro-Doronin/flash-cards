import { StarItem } from '../starItem/StarItem.tsx'

import c from './grade.module.scss'

type GradeType = {
  value: number
}

export const Grade = ({ value }: GradeType) => {
  return (
    <div className={c.grade}>
      <StarItem parentValue={value} value={1} />
      <StarItem parentValue={value} value={2} />
      <StarItem parentValue={value} value={3} />
      <StarItem parentValue={value} value={4} />
      <StarItem parentValue={value} value={5} />
    </div>
  )
}
