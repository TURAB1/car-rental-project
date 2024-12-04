import React from 'react'
import carData from '../assets/data/carData'
import { Container } from 'reactstrap'

const Cars= () => {
  return (
    <Container>
    <div>
      {
        carData.map((item,index)=>{
          return<p>{item.brand}</p>
        })
      }
    </div>
    </Container>
  )
}

export default Cars
