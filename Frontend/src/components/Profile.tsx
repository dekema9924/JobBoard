import { useEffect } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { login } from '../features/user'



function Profile() {
  const token = Cookies.get('token')
  const dispatch = useDispatch()
  const user = useSelector((state: any) => state.user.value)


  useEffect(() => {
    axios.defaults.baseURL = 'http://localhost:3000'

    axios.get('/api/profile', {
      headers: { 'Authorization': `Bearer ${token} ` }
    }).then((response) => {
      console.log(response.data)
      dispatch(login({ username: response.data.data.username, Token: token }))
    })
  }, [token])

  return (
    <>

      <div>
        <p className='text-2xl font-semibold'>profile</p>
        <p className='text-sm text-gray-400'>View your profile Info</p>
        <div className='flex items-center gap-4 my-4'>
          <div>
            <p className='w-24 h-24 border-2 text-center rounded-full flex justify-center items-center font-black text-4xl uppercase'>{user.username.slice(0,1)}</p>
          </div>
          <p className='text-purple-500 h-10 capitalize text-2xl'>{user.username}</p>
        </div>
      
      </div>
    </>
  )
}

export default Profile