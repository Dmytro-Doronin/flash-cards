import './App.css'
import { useEffect, useState } from 'react'

export function App() {
  const [users, setUsers] = useState<any>([])
  const [currentPage, setCurrentPage] = useState<any>()
  const [perPage, usePerPage] = useState<any>(10)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(res => setUsers(res))
  }, [])

  return (
    <div>
      {users.map((user): any => (
        <div
          style={{ padding: '10px', textAlign: 'left', border: '1px solid white' }}
          key={user.id}
        >
          {user.title}
        </div>
      ))}
    </div>
  )
}
