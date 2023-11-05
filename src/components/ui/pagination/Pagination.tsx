export const Pagination = ({ pages, callback }: any) => {
  const arrPages = []

  for (let i = 1; i <= pages; i++) {
    arrPages.push(i)
  }

  return (
    <div style={{ display: 'flex', marginTop: '10px' }}>
      {arrPages.map(item => {
        return (
          <div
            key={item}
            style={{ padding: '5px', border: '1px solid white', color: 'white', cursor: 'pointer' }}
            onClick={() => callback(item)}
          >
            {item}
          </div>
        )
      })}
    </div>
  )
}
