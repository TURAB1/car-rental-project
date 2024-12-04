import React from 'react'
import { Container ,Col} from 'reactstrap'

const CarItem = ({imgUrl,carName,price}) => {
  return (
    <Col lg="12">

      <img src={imgUrl} alt='car' />
      <h1>{carName}</h1>
      <h2>${price}/Day</h2>
    </Col>

  )
}

export default CarItem
