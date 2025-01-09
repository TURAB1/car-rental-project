import React ,{useEffect}from 'react'
import "../styles/home.css"
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import FindCarForm from '../UI/FindCarForm'
import About from './About'
import Cars from './Cars'
import Blog from './Blog'
import Services from '../UI/Services'
const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)})
    return (
        <div className='home-container'>

            <div className='background-car-image'>
                <Container>
                <div className="discount-content ">
                    <h4 className="text-light ">For Rent $70 Per Day</h4>
                    <h1 className="text-light ">Reserve Now and Get 50% Off</h1>
                    <Link to="/cars" className="btn-reserve">Reserve Now</Link>

                </div>
                </Container>


            </div>
           
            <Container className='car-left-container'>
                <Row>
                    <Col>
                        <div className="find-cars-left">
                            <h2>Find your best car here</h2>
                        </div>
                    </Col>

                    <Col>
                        <FindCarForm/>
                    </Col >
                </Row>
            </Container>
            <About/>
            <Services/>
            <Cars/>
            <Blog/>
          
        </div>
    )
}

export default Home
