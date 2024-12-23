import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from "../pages/Home"
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
import About from '../pages/About'
import Cars from '../pages/Cars'
import Blog from '../pages/Blog'
import Search from '../UI/Search'
import Cart from '../pages/Cart'
import CarDetails from '../UI/CarDetails'

const Routers = () => {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/cars/:slug" element={<CarDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
       
      </Routes>
  )
}

export default Routers
