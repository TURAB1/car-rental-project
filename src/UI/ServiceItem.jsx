import React from 'react'
import { Col } from 'reactstrap'

const ServicesItem = ({title,desc}) => {
  return (
    <Col lg="4" md="6">

      <h4 className='sub-text-color'>{title}</h4>
      <h5>{desc}</h5>

    </Col>
  )
}

export default ServicesItem


