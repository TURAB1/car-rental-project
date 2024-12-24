import React ,{useContext}from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Col, Row, Button,Input } from 'reactstrap'
import { useParams } from 'react-router-dom';
import carData from '../assets/data/carData';
import { carContext } from './UserContext';
import "../styles/car-details.css"

const CarDetails = () => {
    const { slug } = useParams();

    const singleCarItem = carData.find((item) => item.carName === slug);
    const {cartItems,addToCart,removeFromCart,updateCartItemCount}=useContext(carContext)
    const navigate=useNavigate();
  

    return (
        <Container className='page-margin'>
            <Row>
                <Col>
                    <img src={singleCarItem.imgUrl} alt="car" />
                </Col>
                <Col>

                    <h1 className='sub-text-color'>{singleCarItem.carName}</h1>
                    <h2 className='sub-text-color'>${singleCarItem.price}/Day</h2>
                    <h4 >{singleCarItem.description}</h4>
                    <Row>
                        <Col><h4 className='text-color'>{singleCarItem.model}</h4></Col>
                        <Col><h4 className='text-color'>{singleCarItem.automatic}</h4></Col>
                        <Col><h4 className='text-color'>{singleCarItem.speed}</h4></Col>
                    </Row>
                    <Row>
                        <Col><h4 className='text-color'>{singleCarItem.gps}</h4></Col>
                        <Col><h4 className='text-color'>{singleCarItem.seatType}</h4></Col>
                        <Col><h4 className='text-color'>{singleCarItem.brand}</h4></Col>
                    </Row>

                </Col>

            </Row>
            <Row>
            <div className='btn-rent'>
                <Button onClick={() => removeFromCart(singleCarItem.id)} className='reduce-btn'>-</Button>
                {/* <Button className='item-number' outline disabled>{ (cartItems[id],id)=>updateCartItemCount(items,id) }</Button>  */}
                <Input
                    id='car-count'
                    type="text"
                    value={cartItems[singleCarItem.id]}
                    onChange={(e) => updateCartItemCount(Number(e.target.value), singleCarItem.id)}
                />
                <Button onClick={() => addToCart(singleCarItem.id)}>+</Button>
               
                </div>
                <button className="pay-btn" >Pay</button>
            </Row>
        </Container>
    )
}

export default CarDetails
