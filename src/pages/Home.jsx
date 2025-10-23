import React from 'react'
import SearchBox from '../components/SearchBox'
import Navbar from '../components/Navbar'
import SuggestionBar from '../components/SuggestionBar'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className='flex flex-col items-center mt-50'>
          <div className='text-6xl font-bold font-Poppins mb-5'>
            <span className='text-[#4285F4]'>J</span>
            <span className='text-[#EA4335]'>a</span>
            <span className='text-[#FBBC05]'>y</span>
            <span className='text-[#4285F4]'>e</span>
            <span className='text-[#34A853]'>s</span>
            <span className='text-[#EA4335]'>h</span>
          </div>
          <SearchBox/>
          <SuggestionBar/>
        </div>
    </div>
  )
}

export default Home