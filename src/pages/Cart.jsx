import React, { useContext, useEffect,useState } from 'react'
import { Container } from 'reactstrap';
import carData from '../assets/data/carData';
import CarItem from '../UI/CarItem';
import { carContext } from '../UI/UserContext';
const Cart = () => {
  const { cartItems, setCartItems } = useContext(carContext)

  const isCartEmpty = Object.keys(cartItems).length === 0 || Object.values(cartItems).every((quantity) => quantity === 0);
  
  return (
    <Container className='page-margin'>
      {
      !isCartEmpty?
      <div className="cart">
        {carData.map((item) => {
          if (cartItems[item.id] !== 0) {
            return <CarItem imgUrl={item.imgUrl} carName={item.carName} price={item.price} id={item.id} />
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