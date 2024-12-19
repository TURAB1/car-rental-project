import React, { useContext } from 'react'
import { Container } from 'reactstrap';
import carData from '../assets/data/carData';
import CarItem from '../UI/CarItem';
import { carContext } from '../UI/UserContext';
const Cart = () => {
  const{cartItems,setCartItems}=useContext(carContext)
  console.log("cart:"+cartItems)
  return (
    <Container className='page-margin'>
          <div className="cart">
         {carData.map((item) => {
          if (cartItems[item.id] !== 0) {
            return  <CarItem imgUrl={item.imgUrl} carName={item.carName} price={item.price} id={item.id} />
          }
          return null
        }
        
        )}
    
      </div>
    </Container>
  )
}

export default Cart