import React from 'react'
import { Col } from 'reactstrap'
import "../styles/blog-item.css"
const BlogItem = ({title,description}) => {
  return (
    <Col lg="4" md="6">

      <h4 className='sub-text-color'>{title}</h4>
      <h5 className='blog-text'>{description.substr(0, 100)}</h5>

    </Col>
  )
}

export default BlogItem
