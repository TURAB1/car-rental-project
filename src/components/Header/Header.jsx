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
    { label: 'Home', path: '/', options: [{ label: 'scroll test', path: '/home/option1' }, { label: 'Modal test', path: '/home/option2' }, { label: 'News', path: '/home/option3' }] },
    { label: 'About', path: '/about', options: [{ label: 'Chart', path: '/about/chart' }, { label: 'Option 2', path: '/about/option2' }, { label: 'Option 3', path: '/about/option3' }] },
    { label: 'Cars', path: '/cars', options: [{ label: '3D view', path: '/car/3d' }, { label: 'Option 2', path: '/car/option2' }, { label: 'Option 3', path: '/car/option3' }] },
    { label: 'Blog', path: '/blog', options: [{ label: 'Option 1', path: '/blog/option1' }, { label: 'Option 2', path: '/blog/option2' }, { label: 'Option 3', path: '/blog/option3' }] },
    { label: 'Cart', path: '/cart', options: [{ label: 'Option 1', path: '/cart/option1' }, { label: 'Option 2', path: '/cart/option2' }, { label: 'Option 3', path: '/cart/option3' }] },
    { label: 'Contact', path: '/contact', options: [{ label: 'Option 1', path: '/contact/option1' }, { label: 'Option 2', path: '/contact/option2' }, { label: 'Option 3', path: '/contact/option3' }] }
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
