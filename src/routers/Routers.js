import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from "../pages/Home"
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
import About from '../pages/About'
import Cars from '../pages/Cars'
import Blog from '../pages/Blog'

const Routers = () => {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
       
      </Routes>
  )
}

export default Routers
