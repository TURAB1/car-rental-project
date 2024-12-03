import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/footer.css'
import '../../styles/header.css'
const Footer = () => {
  return (
    <div className='footer'>
        
            <Link to="/" className='links'>Home</Link>
       
            <Link to="/services" className='links'>services</Link>
       
            <Link to="/contact" className='links'>Contact us</Link>

    </div>
  )
}

export default Footer
