
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import JobPost from './components/JobPost'
import JobInfo from './components/JobInfo'

function App() {
  return (
    <>
      <Header />
      <div className=' w-11/12 m-auto my-8'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/postings' element={<JobPost />} />
          <Route path='/postings/:id' element={<JobInfo/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
