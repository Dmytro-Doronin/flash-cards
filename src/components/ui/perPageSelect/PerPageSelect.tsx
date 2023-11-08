import { FC } from 'react'

import { classNames } from '../pagination/Pagination.tsx'
import { Options, SelectComponent } from '../select/SelectComponent.tsx'

export type PerPageSelectProps = {
  onPerPageChange: (itemPerPage: string) => void
  perPage: string
  perPageOptions: Options[]
}

export const PerPageSelect: FC<PerPageSelectProps> = ({
  perPage,
  perPageOptions,
  onPerPageChange,
}) => {


  return (
    <div className={classNames.selectBox}>
      Показать
      <SelectComponent
        perPageForSelect={perPage}
        perPageOptions={perPageOptions}
        onPerPageChange={onPerPageChange}
        // onChange={onPerPageChange}
      />
      на странице
    </div>
  )
}
