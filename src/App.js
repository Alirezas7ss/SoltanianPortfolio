
import React from 'react'
import Home from './components/home/Home'
import { Route,Routes , Navigate } from 'react-router-dom'
import Cv from './components/cv/Cv'
export default function App() {
  return (
    <>
     <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/cv' element={<Cv/>} />
      <Route path='/' element={<Navigate to='/home' />} />
     </Routes>
    </>
  )
}
