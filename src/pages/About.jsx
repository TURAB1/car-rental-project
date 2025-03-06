import React from 'react'
import { Col, Row, Container } from 'reactstrap'
import bmw from "../assets/all-images/cars-img/bmw-offer.png"
import "../styles/about.css"
import ScrollTest from '../UI/ScrollTest'

const About = () => {
  return (
    <div >
      <Container className='about-container' >
        <Row>
          <Col>
            <h2 className='text-color'>About us</h2>
            <h1 className='sub-text-color'>Welcome to car rent service</h1>
            <h4 className='about-container'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni eligendi ad error, soluta assumenda nihil illo quasi nam facilis rerum, quas eum fugiat a aspernatur. Molestias odio aperiam assumenda asperiores ipsum dolor sit amet, consectetur adipisicing elit.<p></p> Aspernatur delectus amet nihil praesentium eum soluta, temporibus voluptatibus necessitatibus tenetur consectetur obcaecati quaerat explicabo. Dignissimos repellendus nulla, pariatur doloribus autem deserunt.
            </h4>
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
