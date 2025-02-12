import React from 'react'
import { useSelector } from 'react-redux'


function Dashboard() {
  const user = useSelector((state: any) => state.user.value)

  return (
    <>  
      <div>
        <p className='text-4xl  font-bold'>Dashboard</p>
          {/* <p className='border-2 h-6'>{user.username}</p> */}
          <p>Currently Under Construction</p>
      </div>
    </>
  )
}

export default Dashboard