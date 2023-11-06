import { FC } from 'react'

import { classNames } from '../pagination/Pagination.tsx'

export type PerPageSelectProps = {
  onPerPageChange: (itemPerPage: number) => void
  perPage: number
  perPageOptions: number[]
}

export const PerPageSelect: FC<PerPageSelectProps> = (
  {
    perPage,
    perPageOptions,
    onPerPageChange,
  }
) => {
  const selectOptions = perPageOptions.map(value => ({
    label: value,
    value,
  }))

  return (
    <div className={classNames.selectBox}>
      Показать
      <Select
        className={classNames.select}
        value={perPage}
        options={selectOptions}
        onChange={onPerPageChange}
        variant="pagination"
      />
      на странице
    </div>
  )
}