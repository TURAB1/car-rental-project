import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'

const Header = () => {
  return (
   <div className='header'>
    {/*    <div className='links-style'>
         <Link to="/" className='links'>Home</Link>
         <Link to="/about" className='links'>About</Link>

         <Link to="/cars" className='links'>Cars</Link>

         <Link to="/blog" className='links'>Blog</Link>

         <Link to="/contact" className='links'>Contact</Link>
       </div> */}
      <Container>
        <Row>
          <Col>
          <Link to="/" className='links'>Home</Link>          
          </Col>
          <Col>
          <Link to="/about" className='links'>About</Link>         
          </Col>
          <Col>
          <Link to="/cars" className='links'>Cars</Link>
          </Col>
          <Col>
          <Link to="/blog" className='links'>Blog</Link>
          </Col>
          <Col>
          <Link to="/contact" className='links'>Contact</Link>
          </Col>
          <Col>
          <div className="search-box">
        <input type="text" placeholder="Search" />
        <span>
          <i class="ri-search-line"></i>
        </span>
      </div>
          </Col>
        </Row>
      </Container>
      

    </div>
  )
}

export default Header
