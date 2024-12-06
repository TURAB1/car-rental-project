import React,{useState} from 'react'
import { Rating } from 'react-simple-star-rating'
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
    <div className='page-margin'>
      contact us
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
      <p>
      <span>{rating}</span>
      </p>
    </div>
  )
}

export default Contact
