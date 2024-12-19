// import React from 'react'
// import { Container, Row, Col, Button,Form, FormGroup, Label, Input, FormText } from 'reactstrap'
// const ContactForm = () => {
//     return (
//         <Container>
//             <Row>
//                 <Col>
//                     <Form>
//                         <FormGroup>
//                             <Label for="exampleEmail">
//                                 Email
//                             </Label>
//                             <Input
//                                 id="exampleEmail"
//                                 name="email"
//                                 placeholder="with a placeholder"
//                                 type="email"
//                             />
//                         </FormGroup>
//                         <FormGroup>
//                             <Label for="exampleText">
//                                 Text Area
//                             </Label>
//                             <Input
//                                 id="exampleText"
//                                 name="text"
//                                 type="textarea"
//                             />
//                         </FormGroup>
//                         <Button>
//                             Submit
//                         </Button>
//                     </Form>
//                 </Col>
//                 <Col>
//                     <FormText>
//                         if you have any complain or inquiry <br></br>
//                         write to us.<br></br>
//                         email:chris@torahware.com
//                     </FormText>
//                 </Col>
//             </Row>
//         </Container>
//     )
// }

// export default ContactForm
export default function ContactForm() {
    function handleSubmit(e) {
      // Prevent the browser from reloading the page
      e.preventDefault();
  
      // Read the form data
      const form = e.target;
      const formData = new FormData(form);
  
      // You can pass formData as a fetch body directly:
      fetch('/some-api', { method: form.method, body: formData });
  
      // Or you can work with it as a plain object:
      const formJson = Object.fromEntries(formData.entries());
      console.log(formJson);
    }
  
    return (
      <form method="post" onSubmit={handleSubmit}>
        <label>
          Text input: <input name="myInput" defaultValue="Some initial value" />
        </label>
        <hr />
        <label>
          Checkbox: <input type="checkbox" name="myCheckbox" defaultChecked={true} />
        </label>
        <hr />
        <p>
          Radio buttons:
          <label><input type="radio" name="myRadio" value="option1" /> Option 1</label>
          <label><input type="radio" name="myRadio" value="option2" defaultChecked={true} /> Option 2</label>
          <label><input type="radio" name="myRadio" value="option3" /> Option 3</label>
        </p>
        <hr />
        <button type="reset">Reset form</button>
        <button type="submit">Submit form</button>
      </form>
    );
  }
  