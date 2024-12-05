import React from 'react'
import { Container ,Col,Row, Button} from 'reactstrap'
import "../styles/car-item.css"
const CarItem = ({imgUrl,carName,price}) => {
  return (
    <Col lg="4" md="6">

      <img src={imgUrl} alt='car' />
      <h1>{carName}</h1>
      <h2>${price}/Day</h2>
      <div className='btn-rent'>
       <Button color="primary">Rent</Button>
       <Button color='warning'>Details</Button>
       </div>
    </Col>

  )
}

export default CarItem
