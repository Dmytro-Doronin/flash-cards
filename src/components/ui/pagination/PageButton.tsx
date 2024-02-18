import { FC } from 'react'

import { NavigationButtonProps, classNames } from './Pagination.tsx'

export type PageButtonProps = NavigationButtonProps & {
  page: number
  selected: boolean
}

export const PageButton: FC<PageButtonProps> = ({ disabled, onClick, page, selected }) => {
  return (
    <button
      className={classNames.pageButton(selected)}
      disabled={selected || disabled}
      onClick={onClick}
    >
      {page}
    </button>
  )
}
