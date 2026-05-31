import { Link } from 'react-router-dom'

const Name = ({small = false}) => {
  return (
    <div className='flex flex-col items-center mt-7 '>
          <Link to="/" className={`${small ? "text-4xl" : "text-6xl"} font-bold font-Poppins mb-5 cursor-pointer select-none`}>
            <span className='text-[#4285F4]'>J</span>
            <span className='text-[#EA4335]'>a</span>
            <span className='text-[#FBBC05]'>y</span>
            <span className='text-[#4285F4]'>e</span>
            <span className='text-[#34A853]'>s</span>
            <span className='text-[#EA4335]'>h</span>
          </Link>
    </div>
  )
}

export default Name