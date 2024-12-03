import React from 'react'
import "../styles/home.css"
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='home-container'>

            <div className='background-car-image'>
                <div className="discount-content ">
                    <h4 className="text-light mb-3">For Rent $70 Per Day</h4>
                    <h1 className="text-light mb-4">Reserve Now and Get 50% Off</h1>

                    <button className="btn reserve__btn mt-4">
                        <Link to="/cars">Reserve Now</Link>
                    </button>
                </div>

            </div> 
            <div> 
            <Container className='car-left-container'>
                <Row>
                    <Col>
                        <div className="find-cars-left">
                            <h2>Find your best car here</h2>
                        </div>
                    </Col>

                    <Col>
                        <h2 className='find-cars-left'>fill form</h2>
                    </Col >
                </Row>
            </Container>
            </div>  
        </div>
    )
}

export default Home
