import { useEffect } from 'react'
import { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import WorkIcon from '@mui/icons-material/Work';
import axios from 'axios';
import { Link } from 'react-router-dom';



function Home() {
    interface jobType {
        job_id: number
        employer_name: string
        job_title: string
        job_location: string
        job_level: string
        job_posted_at: string
        employer_logo: string
    }

 

    const [JobsData, setJobsData] = useState<jobType[]>([])
    const [isFetching, setFetching] = useState(true)

    useEffect(() => {
        axios.defaults.baseURL = 'http://localhost:3000/api'
        axios.get('/jobs').then((response) => {
            setJobsData(response.data.data)
            setFetching(false)
        })
    }, [])

    return (
        <>
            <div className='m-auto w-11/12'>
                <h1 className='font-bold text-xl font-stretch-50% '>What is JobTopia?</h1>
                <p className=' w-[400px] my-2 text-gray-400'>A free fast Career Site Jobs API that scraps real time-data. Users are taken directly to the
                    employer's career site. Fresh Jobs from the past <span className='text-purple-400'>7 days</span>
                </p>


                {/* map data */}
                <div className=' h-56 w-11/12 rounded-2xl border-gray-700 mt-20 border-2 overflow-scroll'>
                    {
                        !isFetching ?
                            JobsData?.map((data) => {
                                return (

                                    <Link to={`/postings/${data.job_id}`} key={data.job_id} className='flex p-4'>
                                        <img className='w-14 h-14  object-cover rounded-full' src={data.employer_logo === null ? "https://placehold.co/600x400" : data.employer_logo} alt="company_logo" />
                                        <div className=' text-sm text-gray-400'>
                                            <div className=' w-fit ml-4 my-1'>
                                                <p>{data.employer_name}</p>
                                                <p className='uppercase text-white'>{data.job_title}</p>
                                            </div>
                                            <div className='flex items-center justify-around w-96'>
                                                <div className='flex items-center gap-1'>
                                                    <LocationOnIcon />
                                                    <p>{data.job_location}</p>
                                                </div>
                                                <div className='flex items-center gap-1'>
                                                    <WorkIcon />
                                                    <p>{data.job_level}</p>
                                                </div>
                                                <div className='flex items-center gap-1'>
                                                    <DateRangeIcon />
                                                    <p>{data.job_posted_at}</p>
                                                </div>
                                            </div>
                                        </div>

                                    </Link>
                                )
                            })
                            : '...loading'
                    }

                </div>
                <p className='text-xs text-gray-300 mt-1'>Don't get left out start applying Today</p>


            </div>
        </>

    )
}

export default Home