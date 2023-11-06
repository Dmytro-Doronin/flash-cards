import { FC } from 'react'

import KeyboardArrowRight from '../../../assets/icons/KeyboardArrowRight.tsx'

import { classNames, NavigationButtonProps } from './Pagination.tsx'

export const NextButton: FC<NavigationButtonProps> = ({ disabled, onClick }) => {
  return (
    <button className={classNames.item} disabled={disabled} onClick={onClick}>
      <KeyboardArrowRight className={classNames.icon} />
    </button>
  )
}
