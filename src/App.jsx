import React from 'react'
import SearchBox from './components/SearchBox'

import {Routes , Route} from "react-router-dom"
import Home from "./pages/Home"
import Results from "./pages/Results"
import About from "./pages/about"
import Projects from "./pages/projects"
import Skills from "./pages/skills"
import Contact from "./pages/Contact"
import Achievements from "./pages/achievements"

const App = () => {
  return (
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/results' element={<Results />}/>
    <Route path='/pages/about' element={<About />}/>
    <Route path='/pages/projects' element={<Projects />}/>
    <Route path='/pages/skills' element={<Skills />}/>
    <Route path='/pages/contact' element={<Contact />}/>
    <Route path='/pages/achievements' element={<Achievements />}/>
   </Routes>
  )
}
export default App