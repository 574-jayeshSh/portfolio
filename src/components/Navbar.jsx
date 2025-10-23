import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-end gap-6 p-4 pr-6 text-sm text-gray-600 items-center'>
        <span className='hover:underline hover:text-black cursor-pointer'>Gmail</span>
        <span className='hover:underline hover:text-black cursor-pointer'>About</span>
        <span className='hover:underline hover:text-black cursor-pointer'>Resume</span>
        <img src="/person-1.jpeg" alt="" className='rounded-full w-10 h-10 hover:ring-3 hover:ring-gray-200 transition duration-200 cursor-pointer'/>
        
    </div>
  )
}

export default Navbar