import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";

function ContactForm() {
  const [validated, setValidated] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false || !isEmailValid) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleEmailChange = (event) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(event.target.value);
    setIsEmailValid(isEmailValid);
  };
  return (
    <Form
      className="contact-form"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control
          required
          type="string"
          placeholder="First Name Last Name"
          name="name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          required
          type="email"
          placeholder="name@example.com"
          name="email"
          onChange={handleEmailChange}
        />
        {!isEmailValid && (
          <Form.Text className="text-danger">
            Please enter a valid email address.
          </Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Leave a Message</Form.Label>
        <Form.Control as="textarea" rows={3} name="message" required/>
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}

export default ContactForm;
