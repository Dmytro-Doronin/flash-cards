import './App.css'
import { useState } from 'react'

// import { Pagination } from './components/ui/pagination/Pagination.tsx'
import { PerPageSelect } from './components/ui/perPageSelect/PerPageSelect.tsx'

export function App() {
  // const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState('10')
  const [perPageOptions] = useState([
    { label: '1', value: '1' },
    { label: '10', value: '10' },
    { label: '100', value: '100' },
  ])

  return (
    <div>
      {/*<Pagination count={100} onChange={setPage} page={page} />*/}
      <PerPageSelect
        onPerPageChange={setPerPage}
        perPage={perPage}
        perPageOptions={perPageOptions}
        variant={'pagination'}
      />
    </div>
  )
}
