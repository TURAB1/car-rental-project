import React from 'react'
import serviceData from '../assets/data/serviceData'
import { Container } from 'reactstrap'

const Services = () => {
    return (
        <Container>
        <div>
            {
                serviceData.map((item, index) => {
                    return <p>{item.title}</p>
                })
            }
        </div>
        </Container>
    )
}

export default Services
