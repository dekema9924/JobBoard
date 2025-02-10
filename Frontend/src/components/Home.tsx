import React from 'react'
import { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import WorkIcon from '@mui/icons-material/Work';



function Home() {
    interface jobType {
        job_id: number
        job_source: string
        job_title: string
        job_location: string
        job_level: string
        job_Date: string
    }

    const initialState: jobType[] = [
        {
            job_id: 1,
            job_source: "pg",
            job_title: "Backend Software engineer",
            job_location: "california",
            job_level: "senior",
            job_Date: "4 days ago"


        },
        {
            job_id: 1,
            job_source: "pg",
            job_title: "Backend Software engineer",
            job_location: "california",
            job_level: "senior",
            job_Date: "4 days ago"


        },
        {
            job_id: 1,
            job_source: "pg",
            job_title: "Backend Software engineer",
            job_location: "california",
            job_level: "senior",
            job_Date: "4 days ago"


        },
    ]

    const [JobsData, setJobsData] = useState(initialState)
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
                        JobsData.map((data) => {
                            return (

                                <div key={data.job_id} className='flex p-4'>
                                    <img className='w-14 h-14  object-cover rounded-full' src="https://placehold.co/600x400" alt="company_logo" />
                                    <div className=' text-sm text-gray-400'>
                                        <div className=' w-fit ml-4 my-1'>
                                            <p>{data.job_source}</p>
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
                                                <p>{data.job_Date}</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }

                </div>
                <p className='text-xs text-gray-300 mt-1'>Don't get left out start applying Today</p>


            </div>
        </>

    )
}

export default Home