import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import FormInput from "../FormInput/FormInput";
import FormTextArea from "../FormInput/FormTextArea";

const ContactForm = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {

    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
                <Form.Group as={Col} xs={6}>
                    <FormInput required type="text" placeholder="John Doe" cId="nameInput" label="Name"/>
                </Form.Group>
                <Form.Group as={Col} xs={6}>
                    <FormInput required type="email" placeholder="name@example.com" cId="emailInput" label="Email address"/>
                </Form.Group>
            </Row>
            <Row className="mt-3">
                <Form.Group as={Col}>
                    <FormTextArea required label="Message" placeholder="Message" cId="msgInput" />
                </Form.Group>
            </Row>
            <Button type="submit">Send</Button>
        </Form>
    );
}

export default ContactForm;