import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import { RiSearchLine } from '@remixicon/react'
import { carContext } from '../../UI/UserContext'


const Header = () => {
  const { searchInput, setSearchInputCar } = useContext(carContext)
//   useEffect(() => {
// setSearchInputCar(searchInput)
//   }, [searchInput])
//   const handleSearch=(e) =>{
//     setSearchInputCar(e)
//     console.log("set state")
//   }
    
  return (
    <div className='header'>

      <Container>
        <Row className='header-routes'>
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
              <input type="text" placeholder="Search car's name"

                onChange={(e)=>setSearchInputCar(e.target.value)}
              />
              <Link  to="/search" className='links'>
              <RiSearchLine />
              </Link>
             
            </div>
          </Col>
        </Row>
      </Container>


    </div>
  )
}

export default Header
