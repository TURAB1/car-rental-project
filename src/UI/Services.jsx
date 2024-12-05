import React from 'react'
import serviceData from '../assets/data/serviceData'
import { Container,Row } from 'reactstrap'
import ServicesItem from './ServiceItem'



const Services = () => {
    return (
        <Container>
        <Row>
            {
                serviceData.map((item, index) => {
                    return <ServicesItem title={item.title} desc={item.desc}/>
                })
            }
        </Row>    
        </Container>
    )
}

export default Services
