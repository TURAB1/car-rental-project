import React from 'react'
import blogData from '../assets/data/blogData'
import { Container,Row} from 'reactstrap'
import BlogItem from '../UI/BlogItem'


const Blog = () => {
  return (
    <Container>
    <Row>
            {
        blogData.map((item,index)=>{
          return <BlogItem title={item.title} description={item.description}/>
        })
      }
    </Row>
   
    </Container>
  )
}

export default Blog
