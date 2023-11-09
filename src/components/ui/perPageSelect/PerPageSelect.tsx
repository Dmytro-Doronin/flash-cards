import { FC } from 'react'

import { classNames } from '../pagination/Pagination.tsx'
import { Options, SelectComponent, variantType } from '../select/SelectComponent.tsx'

export type PerPageSelectProps = {
  onPerPageChange: (itemPerPage: string) => void
  perPage: string
  perPageOptions: Options[]
  variant: variantType
}

export const PerPageSelect: FC<PerPageSelectProps> = ({
  perPage,
  perPageOptions,
  onPerPageChange,
  variant,
}) => {
  return (
    <div className={classNames.selectBox}>
      Показать
      <SelectComponent
        perPageForSelect={perPage}
        perPageOptions={perPageOptions}
        onPerPageChange={onPerPageChange}
        variant={variant}
        // onChange={onPerPageChange}
      />
      на странице
    </div>
  )
}
