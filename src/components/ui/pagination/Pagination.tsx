import { FC } from 'react'

import { clsx } from 'clsx'

import { MainPaginationButtons } from './MainPaginationButton.tsx'
import { NextButton } from './NextButton.tsx'
import s from './pagination.module.scss'
import { PrevButton } from './PrevButton.tsx'
import { usePagination } from './usePagination'

export type PaginationConditionals =
  | {
      onPerPageChange: (itemPerPage: string) => void
      perPage: string
      perPageOptions: { label: string; value: string }[]
    }
  | {
      onPerPageChange?: never
      perPage?: null
      perPageOptions?: never
    }

export type PaginationProps = {
  count: number
  onChange: (page: number) => void
  page: number
  siblings?: number
} & PaginationConditionals

export const classNames = {
  container: s.container,
  dots: s.dots,
  icon: s.icon,
  item: s.item,
  pageButton(selected?: boolean) {
    return clsx(this.item, selected && s.selected)
  },
  root: s.root,
  select: s.select,
  selectBox: s.selectBox,
}

export type NavigationButtonProps = {
  disabled?: boolean
  onClick: () => void
}

export const Pagination: FC<PaginationProps> = ({ count, onChange, page, siblings }) => {
  const {
    handleMainPageClicked,
    handleNextPageClicked,
    handlePreviousPageClicked,
    isFirstPage,
    isLastPage,
    paginationRange,
  } = usePagination({
    count,
    onChange,
    page,
    siblings,
  })

  return (
    <div className={classNames.root}>
      <div className={classNames.container}>
        <PrevButton disabled={isFirstPage} onClick={handlePreviousPageClicked} />

        <MainPaginationButtons
          currentPage={page}
          onClick={handleMainPageClicked}
          paginationRange={paginationRange}
        />

        <NextButton disabled={isLastPage} onClick={handleNextPageClicked} />
      </div>
    </div>
  )
}
