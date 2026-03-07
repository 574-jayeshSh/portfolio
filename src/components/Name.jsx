import React from 'react'

const Name = ({small = false}) => {
  return (
    <div className='flex flex-col items-center mt-7 '>
          <div className={`${small ? "text-4xl" : "text-6xl"} font-bold font-Poppins mb-5`}>
            <span className='text-[#4285F4]'>J</span>
            <span className='text-[#EA4335]'>a</span>
            <span className='text-[#FBBC05]'>y</span>
            <span className='text-[#4285F4]'>e</span>
            <span className='text-[#34A853]'>s</span>
            <span className='text-[#EA4335]'>h</span>
          </div>
    </div>
  )
}

export default Name