import './App.css'
import { useState } from 'react'
import { Pagination } from './components/ui/pagination/Pagination.tsx'


export function App() {
  
  const [page, setPage] = useState(1)
  
  return <div>
    <Pagination count={100} onChange={setPage} page={page}/>
  </div>
}
