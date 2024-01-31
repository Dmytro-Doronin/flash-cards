import EmptyStar from '../../assets/icons/EmptyStar.tsx'
import FullStar from '../../assets/icons/FullStar.tsx'

type StarItemType = {
  parentValue: number
  value: number
  onGradeChange?: (gradeValue: number) => void
}

export const StarItem = ({ parentValue, value, onGradeChange }: StarItemType) => {
  const onGradeHandler = (value: number) => {
    onGradeChange(value)
  }

  return (
    <div onClick={() => onGradeHandler(value)}>
      {value <= parentValue ? <FullStar /> : <EmptyStar />}
    </div>
  )
}
