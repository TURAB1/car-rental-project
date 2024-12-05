import React from 'react'
import { Col } from 'reactstrap'
const BlogItem = ({title,description}) => {
  return (
    <Col lg="4" md="6">

      <h2>{title}</h2>
      <h3>{description}</h3>

    </Col>
  )
}

export default BlogItem
