import EmptyStar from '../../assets/icons/EmptyStar.tsx'
import FullStar from '../../assets/icons/FullStar.tsx'

import c from './starItem.module.scss'

type StarItemType = {
  parentValue: number
  value: number
}

export const StarItem = ({ parentValue, value }: StarItemType) => {
  return <div className={c.starItem}>{value <= parentValue ? <FullStar /> : <EmptyStar />}</div>
}
