import React,{useState} from 'react'
import { Col, Button,Input} from 'reactstrap'
import "../styles/car-item.css"
import { useContext } from 'react'
import { carContext } from './UserContext'
const CarItem = ({imgUrl,carName,price,id}) => {
  const [itemsNumber,setItemsNumber]=useState(0)
  const {cartItems,addToCart,removeFromCart,updateCartItemCount}=useContext(carContext)

  return (
    <Col lg="4" md="6">

      <img src={imgUrl} alt='car' />
      <h1>{carName}</h1>
      <h2>${price}/Day</h2>
      <div className='btn-rent'>
       <Button color="primary">Rent</Button>
       <Button color='warning'>Details</Button>
       <Button onClick={()=>removeFromCart(id)} className='reduce-btn'>-</Button>
       {/* <Button className='item-number' outline disabled>{ (cartItems[id],id)=>updateCartItemCount(items,id) }</Button>  */}
       <Input 
       id='car-count'
       type="text"
       value={cartItems[id]}
       onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
       />
       <Button onClick={()=>addToCart(id)}>+</Button>
       
       </div>
    </Col>

  )
}

export default CarItem

