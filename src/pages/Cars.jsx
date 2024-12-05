import React from 'react'
import carData from '../assets/data/carData'
import { Container, Col, Row } from 'reactstrap'
import CarItem from '../UI/CarItem'

const Cars = () => {
  return (
    <Container>
   
       <Row>
          
            {
              carData.map((item, index) => {
                return (
                  <CarItem imgUrl={item.imgUrl} carName={item.carName} price={item.price} />

                )
              })
            }
        
       
        </Row>
    </Container>
  )
}

export default Cars
