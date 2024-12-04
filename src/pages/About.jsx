import React from 'react'
import { Col, Row, Container } from 'reactstrap'
import bmw from "../assets/all-images/cars-img/bmw-offer.png"


const About = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h2>About us</h2>
            <h1>Welcome to car rent service</h1>
            <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni eligendi ad error, soluta assumenda nihil illo quasi nam facilis rerum, quas eum fugiat a aspernatur. Molestias odio aperiam assumenda asperiores.</h6>

          </Col>
          <Col>
            <img src={bmw} alt="car" />
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default About
