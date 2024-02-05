import EmptyStar from '../../assets/icons/EmptyStar.tsx'
import FullStar from '../../assets/icons/FullStar.tsx'

import c from './starItem.module.scss'

type StarItemType = {
  parentValue: number
  value: number
  cardId: string
  onGradeChange?: (gradeValue: number, cardId: string) => void
}

export const StarItem = ({ parentValue, value, onGradeChange, cardId }: StarItemType) => {
  const onGradeHandler = () => {
    onGradeChange?.(value, cardId)
  }

  return (
    <div className={c.starItem} onClick={onGradeHandler}>
      {value <= parentValue ? <FullStar /> : <EmptyStar />}
    </div>
  )
}
