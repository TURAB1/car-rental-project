import React, { useContext, useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import { RiSearchLine } from '@remixicon/react'
import { carContext } from '../../UI/UserContext'

const DropdownMenu = ({ links }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)

  return (
    <Col
      onMouseEnter={() => setIsDropdownVisible(true)}
      onMouseLeave={() => setIsDropdownVisible(false)}
    >
      <Link to={links[0].path} className='links'>{links[0].label}</Link>
      {isDropdownVisible && (
        <div className='dropdown'>
          {links.slice(1).map((link, index) => (
            <Link key={index} to={link.path} className='dropdown-item'>{link.label}</Link>
          ))}
        </div>
      )}
    </Col>
  )
}
const Header = () => {
  const { searchInput, setSearchInputCar } = useContext(carContext)
  const input = useRef()

  const routes = [
    { label: 'Home', path: '/', options: [ { label: 'Home', path: '/' }, { label: 'News', path: '/home/news' }] },
    { label: 'About', path: '/about', options: [{ label: 'About Us', path: '/about' },{ label: 'Chart', path: '/about/chart' }] },
    { label: 'Cars', path: '/cars', options: [{ label: 'Cars', path: '/cars' },{ label: '3D view', path: '/car/3d' }, ] },
    { label: 'Blog', path: '/blog', options: [] },
    { label: 'Cart', path: '/cart', options: [] },
    { label: 'Contact', path: '/contact', options: [] }
  ]

  return (
    <div className='header'>
      <Container>
        <Row className='header-routes'>
          {routes.map((route, index) => (
            <DropdownMenu key={index} links={[{ label: route.label, path: route.path }, ...route.options]} />
          ))}
   {
              <Col>
            <div className="search-box">
              <input type="text" placeholder="Search car's name"

                onChange={(e) => setSearchInputCar(e.target.value)}
              />
              <Link to="/search" className='links'>
                <RiSearchLine />
              </Link>

            </div>
          </Col>

   }       
        </Row>
      </Container>
    </div>
  )
}

export default Header

// const Header = () => {
//   const { searchInput, setSearchInputCar } = useContext(carContext)
//   const input = useRef();
//   const [isDropdownVisible, setIsDropdownVisible] = useState(false)
  

//   return (
//     <div className='header'>

//       <Container>
//         <Row className='header-routes'>
//           <Col
//             onMouseEnter={() => setIsDropdownVisible(true)}
//             onMouseLeave={() => setIsDropdownVisible(false)}
//             >
//             <Link to="/" className='links'>Home</Link>
//             {isDropdownVisible && (
//               <div className='dropdown'>
//                 <Link to="/home/option1" className='dropdown-item'>Option 1</Link>
//                 <Link to="/home/option2" className='dropdown-item'>Option 2</Link>
//                 <Link to="/home/option3" className='dropdown-item'>Option 3</Link>
//               </div>
//             )}
//           </Col>
//           <Col>
//             <Link to="/about" className='links'>About</Link>
//           </Col>
//           <Col>
//             <Link to="/cars" className='links'>Cars</Link>
//           </Col>
//           <Col>
//             <Link to="/blog" className='links'>Blog</Link>
//           </Col>
//           <Col>
//             <Link to="/cart" className='links'>Cart</Link>
//           </Col>
//           <Col>
//             <Link to="/contact" className='links'>Contact</Link>

//           </Col>
//           <Col>
//             <div className="search-box">
//               <input type="text" placeholder="Search car's name"

//                 onChange={(e) => setSearchInputCar(e.target.value)}
//               />
//               <Link to="/search" className='links'>
//                 <RiSearchLine />
//               </Link>

//             </div>
//           </Col>
//         </Row>
//       </Container>


//     </div>
//   )
// }

// export default Header
