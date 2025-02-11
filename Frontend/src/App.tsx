
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import JobPost from './components/JobPost'
import JobInfo from './components/JobInfo'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
    <>
      <Header />
      <div className=' w-11/12 m-auto my-8'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/postings' element={<JobPost />} />
          <Route path='/postings/:id' element={<JobInfo/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
