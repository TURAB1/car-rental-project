import React from 'react'
import { Container, Row, Col, Button,Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import "../styles/contact.css"
const ContactForm = () => {
    return (
        <Container className='contact-container'>
            <Row>
                <Col className='left-contact'>
                <FormText >
                    <h2>Address</h2>
                    <h4 className='text-color'>The Live Biz One, 25 Obongsandan 3-ro</h4>
                     <h2>Let's talk</h2>
                     <h4 className='text-color'>+821045484555</h4>
                     <h2>General Support</h2>
                    <h4 className='text-color'>email:chris@torahware.com</h4>
                </FormText>
                </Col>
                <Col className='right-contact'>
                    <Form>
                        <FormGroup>
                            <h2>Send us a message</h2>
                            <Label for="exampleEmail">
                                Email
                            </Label>
                            <Input 
                                id="text-input"
                                name="email"
                                placeholder="Enter your Email"
                                type="email"
                            />
                            <Label for="examplePhone">
                                Phone
                            </Label>
                            <Input
                                id="text-input"
                                name="phone"
                                placeholder="Enter your Phone number"
                                type="phone"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">
                                Message
                            </Label>
                            <Input
                                id="text-input"
                                name="text"
                                placeholder="text message"
                                type="textarea"
                            />
                        </FormGroup>
                        <Button color='warning'>
                            Send Message
                        </Button>
                    </Form>
                </Col>

            </Row>
        </Container>
    )
}

export default ContactForm

  