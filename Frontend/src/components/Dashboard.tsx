import React from 'react'
import { useSelector } from 'react-redux'


function Dashboard() {
  const user = useSelector((state: any) => state.user.value)

  return (
    <>  
      <div>
        <p>Dashboard</p>
          <p className='border-2 h-6'>{user.username}</p>
      </div>
    </>
  )
}

export default Dashboard