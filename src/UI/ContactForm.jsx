import React from 'react'
import { Container, Row, Col, Button,Form, FormGroup, Label, Input, FormText } from 'reactstrap'
const ContactForm = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">
                                Email
                            </Label>
                            <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="with a placeholder"
                                type="email"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">
                                Text Area
                            </Label>
                            <Input
                                id="exampleText"
                                name="text"
                                type="textarea"
                            />
                        </FormGroup>
                        <Button>
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col>
                    <FormText>
                        if you have any complain or inquiry <br></br>
                        write to us.<br></br>
                        email:chris@torahware.com
                    </FormText>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactForm
