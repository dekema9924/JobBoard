import { useEffect } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useSelector } from 'react-redux'
import { useDispatch} from 'react-redux';
import {login} from '../features/user'



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
      dispatch(login({username: response.data.data.username, Token: token }))
    })
  }, [token])

  return (
    <>
          <div>Profile</div>
          <p className='border-2 h-10 text-white'>{user.username}</p>
    </>
  )
}

export default Profile