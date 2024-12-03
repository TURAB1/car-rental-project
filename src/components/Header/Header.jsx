import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <div className='links-style'>
            <Link to="/" className='links'>Home</Link>

            <Link to="/services" className='links'>services</Link>

            <Link to="/contact" className='links'>Contact us</Link>
            </div>
            <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
        </div>
    )
}

export default Header
