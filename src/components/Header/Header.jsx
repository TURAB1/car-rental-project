import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <div className='links-style'>
        <Link to="/" className='links'>Home</Link>
        <Link to="/about" className='links'>About</Link>

        <Link to="/cars" className='links'>Cars</Link>

        <Link to="/blog" className='links'>Blog</Link>

        <Link to="/contact" className='links'>Contact</Link>
      </div>
      <div className="search-box">
        <input type="text" placeholder="Search" />
        <span>
          <i class="ri-search-line"></i>
        </span>
      </div>
    </div>
  )
}

export default Header
