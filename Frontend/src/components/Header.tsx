
import { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PersonIcon from '@mui/icons-material/Person';

function Header() {
  const [isHamburgerClicked, setHamburgerClicked] = useState(false)
  const [isJobDropdown, setJobDropdown] = useState(false)
  const [isLgscreenDropdown, setLgScreenDropdown] = useState(false)

  const HandleHamburgerMenu = () => {
    setHamburgerClicked(prevState => !prevState)
    setJobDropdown(false)
  }

  const HandleJobDropDown = () => {
    setJobDropdown(prevState => !prevState)
  }

  const HandleLgScreenDropdown = () => {
    setLgScreenDropdown(prevState => !prevState)
  }

  return (
    <>
      <header className='border-2 flex items-center justify-between mt-4 rounded-lg border-gray-700 h-14 w-11/12 m-auto'>
        <div className='ml-6'>
          <p className='font-bold font-stretch-50% text-2xl'>JobTopia</p>
        </div>
        <div className=' flex gap-6 mr-6 items-center'>
          <div className='hidden md:flex gap-4'>
              <p className='text-sm'>Home</p>
            <div>
              <div onClick={HandleLgScreenDropdown} className='flex items-center cursor-pointer '>
                <p className='text-sm'>Job Postings</p>
                <KeyboardArrowDownIcon className={!isLgscreenDropdown ? '-rotate-90' : ''} />
              </div>

              {/* lg screen dropdown  */}
              <div style={{height: isLgscreenDropdown ? "260px" : "0px", padding: isLgscreenDropdown ? "10px" : "0px", border: isLgscreenDropdown ? "1px solid #364153"  : "0px"}} className='border-2 cursor-default overflow-x-hidden border-gray-700 p-4 w-[470px]  absolute top-20 right-0 flex flex-wrap gap-1 transition-all duration-700'>
                <div className=' w-5/11 p-2  hover:bg-gray-800 rounded-lg'>
                  <p className='capitalize w-11/12 '>All Job Posting</p>
                  <p className='text-gray-400 text-sm'>Browse all Job postings</p>
                </div>
                <div className=' w-5/11 p-2  hover:bg-gray-800 rounded-l'>
                  <p className='capitalize w-11/12 '>Internships</p>
                  <p className='text-gray-400 text-sm'>Browse Internship Opportunities</p>
                </div>
                <div className=' w-5/11 p-2  hover:bg-gray-800 rounded-l'>
                  <p className='capitalize w-11/12 '>Software Engineer </p>
                  <p className='text-gray-400 text-sm'>Browse Sofware Engineer roles at different levels</p>
                </div>
                <div className=' w-5/11 p-2  hover:bg-gray-800 rounded-l'>
                  <p className='capitalize w-11/12 '>CyberSecurity</p>
                  <p className='text-gray-400 text-sm'>Explore CyberSecurity roles</p>
                </div>
                <div className=' w-5/11 p-2  hover:bg-gray-800 rounded-l'>
                  <p className='capitalize w-11/12 '>Entry Level</p>
                  <p className='text-gray-400 text-sm'>No experience? No problem.</p>
                </div>

              </div>
            </div>
          </div>
          <button className='cursor-pointer bg-purple-800 w-20 text-sm uppercase rounded-lg border-2 border-purple-400 text-purple-200 md:border-gray-700 md:bg-transparent md:text-white md:capitalize'>Login</button>
          <button className='hidden md:block cursor-pointer'>Register</button>
          <div onClick={HandleHamburgerMenu} className='md:hidden border-2 border-gray-700 rounded-lg w-12 h-9 flex justify-center flex-col items-center pt-1 cursor-pointer'>
            <span className={isHamburgerClicked ? "hidden transition-all duration-700" : 'w-6 h-2 border-t-2 block transition-all duration-700'}></span>
            <span className={isHamburgerClicked ? "w-6 h-2 border-t-2 block rotate-45 translate-y-[4px] translate-x-[-4px] transition-all duration-700" : 'transition-all duration-700 w-6 h-2 border-t-2 block'}></span>
            <span className={isHamburgerClicked ? "w-6 h-2 border-t-2 block rotate-[-43deg] translate-y-[-3px] transition-all duration-700 " : 'w-6 h-2 border-t-2 block transition-all duration-700'}></span>
          </div>
        </div>

      </header>
      {/* Mobile Nav menu */}
      <div className=''>
        <div style={{ height: isHamburgerClicked ? "210px" : "0px", border: isHamburgerClicked ? "2px solid #364153" : "0px" }} className='md:hidden w-50 transition-all duration-500  border-2 border-gray-700 absolute right-6 flex flex-col p-2 rounded-lg overflow-hidden  '>
          <div className='flex items-center gap-2 hover:bg-gray-800 rounded-lg p-2'>
            <p className='text-sm'>Home</p>
            <HomeIcon />
          </div>
          <hr className=' text-gray-500 my-2 ' />
          <div className='cursor-default flex items-center hover:bg-gray-800 rounded-lg h-10 p-2 relative'>
            <div onClick={HandleJobDropDown} className='flex items-center'>
              <p className='text-sm'>Job Postings</p>
              <KeyboardArrowDownIcon className={isJobDropdown ? '' : '-rotate-90 '} />
            </div>
          </div>
          <div className='flex items-center my-2  hover:bg-gray-800 rounded-lg h-10 p-2'>
            <p onClick={() => setHamburgerClicked(false)} className='text-sm'>Login</p>
            <PersonIcon className='p-1' />
          </div>
          <div className='flex items-center  hover:bg-gray-800 rounded-lg h-10 p-2'>
            <p onClick={() => setHamburgerClicked(false)} className='text-sm'>Sign Up</p>
            <PersonAddAltIcon className='p-1' />
          </div>
        </div>
        {/* jopPosting dropdown */}
        <div className='md:hidden'>
          <div style={{ display: isJobDropdown ? "block" : "none", }} className=' absolute left-28 bottom-66 text-sm p-2 border-2 border-gray-700 w-42'>
            <p onClick={() => setJobDropdown(false)} className='py-2 hover:bg-gray-800 rounded-lg h-10 p-2'>Browse Jobs</p>
            <hr className=' text-gray-500 my-2 ' />
            <p onClick={() => setJobDropdown(false)} className='hover:bg-gray-800 rounded-lg h-10 p-2 '>Internship</p>
            <p onClick={() => setJobDropdown(false)} className='hover:bg-gray-800 rounded-lg h-10 p-2'>Entry Level</p>
            <hr className=' text-gray-500 my-2 ' />
            <span className='text-xs text-gray-400'>Careers</span>
            <p onClick={() => setJobDropdown(false)} className='hover:bg-gray-800 rounded-lg h-10 p-2'>Sofware Engineer</p>
            <p onClick={() => setJobDropdown(false)} className='hover:bg-gray-800 rounded-lg h-10 p-2'>CyberSecurity</p>
          </div>
        </div>


      </div>
    </>
  )
}

export default Header