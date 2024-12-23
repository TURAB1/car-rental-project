import React, { useContext, useEffect,useState } from 'react'
import { Container } from 'reactstrap';
import carData from '../assets/data/carData';
import CarItem from '../UI/CarItem';
import { carContext } from '../UI/UserContext';
const Cart = () => {
  const { cartItems, setCartItems } = useContext(carContext)
  const [isCartEmpty, setIsCartEmpty] = useState(0)
  console.log("cart:" + cartItems)

  // useEffect(() => {
  // setIsCartEmpty(carData.every((item) => item == 0))
  // for (let i = 1; i < carData.length + 1; i++) {
  //   if (cartItems[i] == 0)
      
    
  // }
  
  //  console("is cart empty:"+isCartEmpty)
  // }, [cartItems])
  return (
    <Container className='page-margin'>
      <div className="cart">
        {carData.map((item) => {
          if (cartItems[item.id] !== 0) {
            return <CarItem imgUrl={item.imgUrl} carName={item.carName} price={item.price} id={item.id} />
          }
          return null
        }

        )}

      </div>
    </Container>
  )
}

export default Cart