import './App.css'
import { useEffect, useState } from 'react'

import axios from 'axios'

import { Pagination } from './components/ui/pagination/Pagination.tsx'
import { Users } from './components/Users.tsx'
export function App() {
  const [posts, setPosts] = useState<any>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalCount, setTotalCount] = useState(0)
  const [perPage] = useState(12)

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`, {
        params: {
          _limit: perPage,
          _page: currentPage,
        },
      })
      .then(res => {
        setPosts(res.data)
        setTotalCount(res.headers['x-total-count'])
      })
  }, [currentPage])

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
  }, [])

  const pages = Math.ceil(totalCount / perPage)

  return (
    <div>
      <Users currentUsers={posts} />
      <Pagination pages={pages} callback={setCurrentPage} />
    </div>
  )
}
