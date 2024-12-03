import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/footer.css'
import '../../styles/header.css'
const Footer = () => {
  return (
    <div className='footer'>
        
        <Link to="/" className='links'>Home</Link>
        <Link to="/about" className='links'>About</Link>

        <Link to="/cars" className='links'>Cars</Link>

        <Link to="/blog" className='links'>Blog</Link>

        <Link to="/contact" className='links'>Contact</Link>

    </div>
  )
}

export default Footer
