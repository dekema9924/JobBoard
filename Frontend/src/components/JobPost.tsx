import { Search } from '@mui/icons-material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function JobPost() {

  const initialState = [
    {
      company: "transamerica",
      job_title: "information technology intern",
      salary: "$21-$24",
      job_location: "Townson, MD, united States",
      date_posted: "4 days ago",
      id: 1

    },
    {
      company: "transamerica",
      job_title: "information technology intern",
      salary: "$21-$24",
      job_location: "Townson, MD, united States",
      date_posted: "4 days ago",
      id:2
    }
    
  ]
  const [jobsData, setJobsData] = useState(initialState)


  return (
    <>
      <div>
        <p className='font-bold text-2xl w-fit '>Search Results</p>
        <span className='text-sm text-purple-400'>1200 results</span>
        <form className='' action="">
          <div className='relative flex items-center w-11/12 m-auto mt-7'>
            <input className='border-2 w-11/12 border-gray-600 outline-none h-13 rounded-xl pl-14 font-thin' type="text" name='job-title' placeholder='job title' />
            <Search className='absolute left-[24px] ' />
          </div>
          <div className='relative flex items-center w-11/12 m-auto my-4'>
            <input className='border-2 w-11/12 border-gray-600 outline-none h-13 rounded-xl pl-14 font-thin' type="text" name="job-location" placeholder='search for a location' />
            <LocationOnIcon className='absolute left-[24px] ' />
          </div>
        </form>

        <div className='my-10 flex flex-col gap-10 ml-4 md:ml-14'>
          {
            jobsData.map((data) => {
              return (
                <Link to={'/postings/id'} key={data.id} className='flex gap-4 w-96 '>
                  <img className='w-12 h-12 rounded-full object-center object-cover' src="https://placehold.co/400" alt="job-logo" />
                  <div className=''>
                    <p className='text-purple-400'>{data.company}</p>
                    <p className='text-2xl font-semibold w-80 capitalize'>{data.job_title}</p>
                    <div className='flex items-center w-20'>
                      <AttachMoneyIcon className='text-gray-400 p-1' />
                      <p className='font-thin'>{data.salary}</p>
                    </div>
                    <div className='flex items-center'>
                      <LocationOnIcon className='text-gray-400 p-1' />
                      <p className='font-thin capitalize'>{data.job_location}</p>
                    </div>
                    <div className='flex items-center '>
                      <QueryBuilderIcon className='text-gray-400 p-1' />
                      <p className='font-thin'>posted <span>{data.date_posted}</span></p>
                    </div>
                  </div>
                </Link>
              )
            })

          }
        </div>
      </div>
    </>
  )
}

export default JobPost