export const Users = ({ currentUsers }) => {
  return (
    <div>
      {currentUsers.map((user: any): any => (
        <div
          style={{ padding: '10px', textAlign: 'left', border: '1px solid white' }}
          key={user.id}
        >
          {user.title}
          {user.id}
        </div>
      ))}
    </div>
  )
}
