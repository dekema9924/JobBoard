
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import JobPost from './components/JobPost'
import JobInfo from './components/JobInfo'
import Login from './components/Login'
import Register from './components/Register'
import { Toaster } from 'react-hot-toast';
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import { AuthRoute } from './Auth/ProtectiveRoutes'


function App() {
  return (
    <>
      <Toaster />
      <Header />
      <div className=' w-11/12 m-auto my-8'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/postings' element={<JobPost />} />
          <Route path='/postings/:id' element={<JobInfo />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          {/* <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/profile' element={<Profile/>}/> */}
          <Route element={<AuthRoute />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/profile' element={<Profile />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
