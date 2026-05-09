import { Link } from 'react-router-dom'
import { RiApps2Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className='flex justify-end gap-5 p-3 pr-6 text-[13px] text-gray-700 items-center font-outfit'>
        <a href="mailto:0574.jayesh.sharma@gmail.com" className='hover:underline cursor-pointer'>Gmail</a>
        <Link to="/pages/projects" className='hover:underline cursor-pointer'>Images</Link>
        
        <div className="p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer text-xl text-gray-600">
          <RiApps2Line />
        </div>

        <Link to="/pages/about">
          <div className="p-0.5 rounded-full border border-transparent hover:border-gray-200 transition-all">
            <img 
              src="https://ui-avatars.com/api/?name=Jayesh+Sharma&background=0D8ABC&color=fff" 
              alt="Profile" 
              className='rounded-full w-8 h-8 cursor-pointer'
            />
          </div>
        </Link>
    </div>
  )
}

export default Navbar