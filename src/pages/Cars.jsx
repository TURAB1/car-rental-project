import React from 'react'
import carData from '../assets/data/carData'
import { Container, Row ,Button} from 'reactstrap'
import CarItem from '../UI/CarItem'
import Search from '../UI/Search'

const Cars = () => {
  return (
    <Container className='page-margin'>
      <Row >
        <Search/>
        <h2 className='text-color'>Come With</h2>
        <h1 className='sub-text-color'>Hot Offers</h1>
        
      </Row>
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
