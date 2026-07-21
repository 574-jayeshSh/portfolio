import React from 'react'
import {Routes, Route, useLocation} from "react-router-dom"
import {AnimatePresence} from "framer-motion"
import Home from "./pages/Home"
import Results from "./pages/Results"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"
import Contact from "./pages/Contact"
import Achievements from "./pages/Achievements"
import NotFound from "./pages/NotFound"

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>}/>
        <Route path='/results' element={<Results />}/>
        <Route path='/pages/about' element={<About />}/>
        <Route path='/pages/projects' element={<Projects />}/>
        <Route path='/pages/skills' element={<Skills />}/>
        <Route path='/pages/contact' element={<Contact />}/>
        <Route path='/pages/achievements' element={<Achievements />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </AnimatePresence>
  )
}
export default App
