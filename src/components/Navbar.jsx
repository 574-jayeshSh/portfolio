import { Link } from 'react-router-dom'
import { RiApps2Line } from "react-icons/ri";
import { useState } from 'react';

const Navbar = () => {

  const [open, setOpen] = useState(false);
  return (
    <div className='flex justify-end gap-5 p-3 pr-6 text-[13px] text-gray-700 items-center font-outfit'>
        <a href="mailto:0574.jayesh.sharma@gmail.com" className='hover:underline cursor-pointer'>Gmail</a>
        <Link to="/pages/projects" className='hover:underline cursor-pointer'>Images</Link>
        
        <div className="p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer text-xl text-gray-600">
          <RiApps2Line />
        </div>

        
          <div className="p-0.5 rounded-full border border-transparent hover:border-gray-200 transition-all">
            <img 
              src="https://ui-avatars.com/api/?name=Jayesh+Sharma&background=0D8ABC&color=fff" 
              alt="Profile" 
              className='rounded-full w-8 h-8 cursor-pointer'
              onClick={() => setOpen(!open)}
            />
            {open && (
              <div className="absolute right-0 top-14 w-72 bg-white border border-gray-200 rounded-3xl shadow-xl p-4">
                <div className="flex flex-col items-center">
                  <p className='text-gray-500 text-sm'>jayesh.sharma@example.com</p>
                  <img src="https://ui-avatars.com/api/?name=Jayesh+Sharma&background=0D8ABC&color=fff" alt="Profile"
                  className='w-20 h-20 rounded-full mt-4' />

                  <h2 className='font-semibold text-lg mt-4'>Jayesh Sharma</h2>
                  <p className='text-gray-500 text-sm flex items-center mt-4'>Full Stack | Software Engineer | System Programming</p>

                  

                </div>

              </div>
            )}
          </div>
       
    </div>
  )
}

export default Navbar