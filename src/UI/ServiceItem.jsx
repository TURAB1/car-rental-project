import React from 'react'
import { Col } from 'reactstrap'

const ServicesItem = ({title,desc}) => {
  return (
    <Col lg="4" md="6">

      <h2>{title}</h2>
      <h3>{desc}</h3>

    </Col>
  )
}

export default ServicesItem


