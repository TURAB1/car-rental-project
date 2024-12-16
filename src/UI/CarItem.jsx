import React,{useState} from 'react'
import { Col, Button,Input} from 'reactstrap'
import "../styles/car-item.css"
import { useContext } from 'react'
import { carContext } from './UserContext'
const CarItem = ({imgUrl,carName,price,id}) => {
  const [itemsNumber,setItemsNumber]=useState(0)
  const {cartItems,addToCart,removeFromCart,updateCartItemCount}=useContext(carContext)
//   const increaseItem=()=>{
//     setItemsNumber(itemsNumber+1)
//  }
//  const reduceItem=()=>{
//    if(itemsNumber !==0)
//      setItemsNumber(itemsNumber-1)
//    else 
//      setItemsNumber(0)
//  }
  return (
    <Col lg="4" md="6">

      <img src={imgUrl} alt='car' />
      <h1>{carName}</h1>
      <h2>${price}/Day</h2>
      <div className='btn-rent'>
       <Button color="primary">Rent</Button>
       <Button color='warning'>Details</Button>
       <Button onClick={(id)=>removeFromCart(id)} className='reduce-btn'>-</Button>
       {/* <Button className='item-number' outline disabled>{ (cartItems[id],id)=>updateCartItemCount(items,id) }</Button>  */}
       <Input 
       type="text"
       value={cartItems[id]}
       onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
       />
       <Button onClick={(id)=>addToCart(id)}>+</Button>
       
       </div>
    </Col>

  )
}

export default CarItem

// const CarItem = ({imgUrl,carName,price,id}) => {
//   const [itemsNumber,setItemsNumber]=useState(0)
//   const increaseItem=()=>{
//      setItemsNumber(itemsNumber+1)
//   }
//   const reduceItem=()=>{
//     if(itemsNumber !==0)
//       setItemsNumber(itemsNumber-1)
//     else 
//       setItemsNumber(0)
//   }
//   return (
//     <Col lg="4" md="6">

//       <img src={imgUrl} alt='car' />
//       <h1>{carName}</h1>
//       <h2>${price}/Day</h2>
//       <div className='btn-rent'>
//        <Button color="primary">Rent</Button>
//        <Button color='warning'>Details</Button>
//        <Button onClick={reduceItem} className='reduce-btn'>-</Button>
//        <Button className='item-number' outline disabled>{ itemsNumber }</Button>
//        <Button onClick={increaseItem}>+</Button>
       
//        </div>
//     </Col>

//   )
// }

// export default CarItem