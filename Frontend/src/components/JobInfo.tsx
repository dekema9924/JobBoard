import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import { Link, useParams } from 'react-router-dom';
import BookmarkIcon from '@mui/icons-material/Bookmark';

function JobInfo() {
    const { id } = useParams()

    return (
        <>
            <div className='-z-1 relative'>
                <div className='flex gap-4    '>
                    <img className='w-12 h-12 rounded-full object-center object-cover' src="https://placehold.co/400" alt="job-logo" />
                    <div className=' w-11/12   '>
                        <p className='text-purple-400'>company</p>
                        <p className='text-2xl font-semibold w-11/12 capitalize'>Information Technology Intern</p>
                        <div className='flex flex-wrap w-11/12  gap-2 my-2'>
                            <div className='flex items-center w-20'>
                                <AttachMoneyIcon className='text-gray-400 p-1' />
                                <p className='font-thin'>salary</p>
                            </div>
                            <div className='flex items-center'>
                                <LocationOnIcon className='text-gray-400 p-1' />
                                <p className='font-thin'>Tampa Florida</p>
                            </div>
                            <div className='flex items-center '>
                                <QueryBuilderIcon className='text-gray-400 p-1' />
                                <p className='font-thin'>posted <span>1 day ago</span></p>
                            </div>
                        </div>
                    </div>
                </div>

               <button className='border-2 w-11/12 h-9 border-purple-500 bg-purple-900 rounded-lg text-purple-300 my-4 md:w-42'> <a href="http://"></a>Apply</button>
               <p className='border-2 border-blue-400 bg-blue-200 text-black p-4 rounded-lg h-20  md:h-12 md:pt-2 md:w-[800px]'>
                    <BookmarkIcon className='text-blue-400'/>
                    Login to save job postings and get notified when more jobs like this are posted.   
                    <Link className=' ml-2 text-blue-800 uppercase font-bold' to={'/login'}>Login here.</Link>
               </p>

               {/* job description */}
               
                <p className='my-10'>Description</p>
            </div>
        </>
    )
}

export default JobInfo