import React, { useState } from 'react'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

function Register() {
    const[isPswrdVisible, setPswrdVisible] = useState("text")

    return (
        <>

            <form className='my-10 w-[400px] flex flex-col  gap-6 p-4 m-auto' action="">
                <div>
                    <p className='text-2xl my-6'>Register</p>
                    <p className='text-xs capitalize'>already have an account? <Link to={'/login'} className='font-bold cursor-pointer text-purple-600 mx-1' >Sign In.</Link></p>
                </div>

                <p className='w-11/12 h-12 text-center pt-3 bg-red-700 font-thin'>Invalid Credentials</p>

                <div className='flex flex-col gap-2 font-thin '>
                    <label htmlFor="email">Email</label>
                    <input className='border-2 w-11/12 h-10 rounded-md outline-none pl-5' type="text" name="email" placeholder='email' />
                </div>
                <div className='flex flex-col gap-2 font-thin '>
                    <label htmlFor="username">Username</label>
                    <input className='border-2 w-11/12 h-10 rounded-md outline-none pl-5' type="text" name="email" placeholder=' username' />
                </div>
                <div className='flex flex-col gap-2 font-thin'>
                    <label htmlFor="email">Password</label>
                    <div className='relative'>
                        <input className='border-2 w-11/12 h-10 rounded-md outline-none pl-5' type={isPswrdVisible} name="password" placeholder='password' />
                        {
                            isPswrdVisible === 'text' ? <VisibilityIcon onClick={()=>setPswrdVisible("password")} className='absolute right-14 p-1 cursor-pointer top-2' /> :
                            <VisibilityOffIcon onClick={()=>setPswrdVisible("text")} className='absolute right-14 p-1 cursor-pointer top-2' />
                        }
                    </div>
                </div>
                <button className='border-2 w-11/12 h-10 bg-purple-800 border-purple-300 text-purple-200 rounded-md uppercase text-sm font-bold cursor-pointer' type='submit'>Register</button>


                {/* github auth btn */}
                <div className=' w-11/12 relative before:content-[" "] before:absolute before:border-t-1 before:border-gray-400 before:w-24 before:top-3
            before:content-[" "] after:absolute after:border-t-1 after:border-gray-400 after:w-24 after:right-0 after:bottom-2
            '>
                    <p className='text-center text-sm text-gray-400 '>OR CONTINUE WITH</p>
                </div>
                <button className='border-2 w-11/12 h-8 rounded-md cursor-pointer text-sm flex items-center justify-center'>
                    <GitHubIcon className='  mx-2' />
                    GITHUB
                </button>

            </form>


        </>
    )
}

export default Register