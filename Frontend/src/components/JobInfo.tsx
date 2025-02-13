import { useEffect, useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import { Link, useParams } from 'react-router-dom';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useSelector } from 'react-redux';
import axios from 'axios';

function JobInfo() {
    interface jobType {
        job_id: number
        employer_name: string
        job_title: string
        job_location: string
        job_salary: number
        job_posted_at: string
        employer_logo: string
        job_apply_link: string
        job_employment_type: string
        job_description: string
        job_highlights: {
            Qualifications: string[],
            Responsibilities: string[]
        }
        job_benefits: string[]
    }

    const { id } = useParams()
    const user = useSelector((state: any) => state.user.value)

    const [jobsData, setJobsData] = useState<jobType>()


    useEffect(() => {
        axios.defaults.baseURL = 'http://localhost:3000/api'
        axios.get(`/jobinfo/${id}`).then((response) => {
            setJobsData(response.data.data[0])
        })
    }, [])




    return (
        <>
            <div className='relative'>
                <div className='flex gap-4    '>
                    <img className='w-12 h-12 rounded-full object-center object-cover' src="https://placehold.co/400" alt="job-logo" />
                    <div className=' w-11/12   '>
                        <p className='text-purple-400'>{jobsData?.employer_name}</p>
                        <p className='text-2xl font-semibold w-11/12 capitalize'>{jobsData?.job_title}</p>
                        <div className='flex flex-wrap w-11/12  gap-2 my-2'>
                            <div className='flex items-center w-fit'>
                                <AttachMoneyIcon className='text-gray-400 p-1' />
                                <p className='font-thin '>{jobsData?.job_salary || 'not provided'}</p>
                            </div>
                            <div className='flex items-center'>
                                <LocationOnIcon className='text-gray-400 p-1' />
                                <p className='font-thin'>{jobsData?.job_location}</p>
                            </div>
                            <div className='flex items-center '>
                                <QueryBuilderIcon className='text-gray-400 p-1' />
                                <p className='font-thin'>posted <span>{jobsData?.job_posted_at}</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                <a target="_blank" href={`${jobsData?.job_apply_link}`}><button className='border-2 w-11/12 h-9 border-purple-500 bg-purple-900 rounded-lg text-purple-300 my-4 md:w-42 cursor-pointer'> Apply</button> </a>
                {
                    !user.Token ? <p className='border-2 border-blue-400 bg-blue-200 text-black p-4 rounded-lg h-20  md:h-12 md:pt-2 md:w-[800px]'>
                        <BookmarkIcon className='text-blue-400' />
                        Login to save job postings and get notified when more jobs like this are posted.
                        <Link className=' ml-2 text-blue-800 uppercase font-bold cursor-pointer' to={'/login'}>Login here.</Link>
                    </p> : ""
                }

                {/* job description */}

                <div>
                    <h1 className=' text-2xl font-semibold my-2 mt-10'>About the Job</h1>
                    <p className='mb-10  after:content-["..."] leading-8'>{jobsData?.job_description.split('', 1000)}</p>
                </div>
                <div>
                    <h1 className='my-2 text-2xl font-semibold'>Preffered Qualification</h1>
                    {
                        jobsData?.job_highlights.Qualifications.slice(0, 4).map((overview) => {
                            return (
                                <>
                                    <li className='leading-8'>{overview}</li>
                                </>
                            )
                        })
                    }

                </div>
                <div>
                    <h1 className='my-2 text-2xl font-semibold'>Responsibilities</h1>

                    {
                        jobsData?.job_highlights.Responsibilities !== undefined ?
                        jobsData?.job_highlights.Responsibilities.slice(0, 4).map((overview, index) => {
                            return (
                                <>
                                    <li className='leading-8' key={index}>{overview}</li>
                                </>
                            )
                        }): "No responsibilities avalaible for this role. check company website for more Info"
                       
                    }
                </div>


            </div>
        </>
    )
}

export default JobInfo