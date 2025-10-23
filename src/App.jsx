import React from 'react'
import SearchBox from './components/SearchBox'
<<<<<<< HEAD
import {Routes , Route} from "react-router-dom"
import Home from "./pages/Home"
import Results from "./pages/Results"
const App = () => {
  return (
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/results' element={<Results />}/>
   </Routes>
=======

const App = () => {
  return (
   <Router>
    
   <Router/>
>>>>>>> f3acd45d92b2990b4907c4863ff2c2821cc68ffd
  )
}

export default App