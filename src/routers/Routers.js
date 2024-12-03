import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Services from '../pages/Services'


const Routers = () => {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
       
      </Routes>
  )
}

export default Routers
