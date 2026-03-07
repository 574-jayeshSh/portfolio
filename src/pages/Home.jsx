import React from 'react'
import SearchBox from '../components/SearchBox'
import Navbar from '../components/Navbar'
import SuggestionBar from '../components/SuggestionBar'
import Footer from '../components/Footer'
import Name from '../components/Name'

const Home = () => {
  return (
    <div className=''>
        <Navbar/>
          <Name/>
          <SearchBox/>
          <SuggestionBar/>
          <Footer/>
        
    </div>
  )
}

export default Home