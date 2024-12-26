import React, { useContext } from 'react'
import { Container } from 'reactstrap';
import carData from '../assets/data/carData';
import CarItem from '../UI/CarItem';
import { carContext } from '../UI/UserContext';
const Cart = () => {
  const { cartItems} = useContext(carContext)

  const isCartEmpty = Object.keys(cartItems).length === 0 || Object.values(cartItems).every((quantity) => quantity === 0);
  
  return (
    <Container className='page-margin'>
      {
      !isCartEmpty?
      <div className="cart">
        {carData.map((item,index) => {
          if (cartItems[item.id] !== 0) {
            return <CarItem key={index} imgUrl={item.imgUrl} carName={item.carName} price={item.price} id={item.id} />
          }
          return null
        }

        )}

      </div>:<h1>Cart is empty</h1>
     }
    </Container>
  )
}

export default Cart