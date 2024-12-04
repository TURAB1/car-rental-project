import React from 'react'
import blogData from '../assets/data/blogData'
import { Container} from 'reactstrap'

const Blog = () => {
  return (
    <Container>
    <div>
            {
        blogData.map((item,index)=>{
          return<p>{item.title}</p>
        })
      }
    </div>
   
    </Container>
  )
}

export default Blog
