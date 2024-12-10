import React,{useState} from 'react'
import { Col, Button} from 'reactstrap'
import "../styles/car-item.css"
const CarItem = ({imgUrl,carName,price}) => {
  const [itemsNumber,setItemsNumber]=useState(1)
  const increaseItem=()=>{
     setItemsNumber(itemsNumber+1)
  }
  const reduceItem=()=>{
    if(itemsNumber !==0)
      setItemsNumber(itemsNumber-1)
    else 
      setItemsNumber(0)
  }
  return (
    <Col lg="4" md="6">

      <img src={imgUrl} alt='car' />
      <h1>{carName}</h1>
      <h2>${price}/Day</h2>
      <div className='btn-rent'>
       <Button color="primary">Rent</Button>
       <Button color='warning'>Details</Button>
       <Button onClick={reduceItem} className='reduce-btn'>-</Button>
       <Button className='item-number' outline disabled>{ itemsNumber }</Button>
       <Button onClick={increaseItem}>+</Button>
       
       </div>
    </Col>

  )
}

export default CarItem
