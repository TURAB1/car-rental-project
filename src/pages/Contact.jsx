import React,{useState} from 'react'
import { Rating } from 'react-simple-star-rating'
import ContactForm from '../UI/ContactForm'
import { Container } from 'reactstrap'
const Contact = () => {
    const [rating,setRating]=useState(0)
   
    const handleRating=(rate)=>{
        setRating(rate)
        console.log(rate)
    }
    const onPointerEnter=()=>console.log("enter")
    const onPointerLeave=()=>console.log("Leave")
    const onPointerMove=(value,index)=>console.log(value,index)
  return (
    <Container className='page-margin'>
      <ContactForm/>
      <p>
        Rate us
      </p>
      <Rating
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
        /* Available Props */
      />

    </Container>
  )
}

export default Contact
