import React, { useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import FormInput from "../FormInput/FormInput";
import FormTextArea from "../FormInput/FormTextArea";

const ContactForm = () => {
    const [validated, setValidated] = useState(false);

    const formRef = useRef(null);

    const emailJsConfig = {
        apiKey: process.env.REACT_APP_EMAILJS_API_KEY,
        serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
        templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID
    };

    const contactNumber = Math.random() * 100000 | 0;

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = formRef.current;

        if (form.checkValidity()) {
            emailjs.sendForm(emailJsConfig.serviceId, emailJsConfig.templateId, form, emailJsConfig.apiKey)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        } else {
            event.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit} ref={formRef}>
            <Row>
                <Form.Control type="hidden" name="contact_number" value={contactNumber} />
                <Form.Group as={Col} xs={6}>
                    <FormInput required type="text" placeholder="John Doe" cId="nameInput" label="Name" name="user_name" />
                </Form.Group>
                <Form.Group as={Col} xs={6}>
                    <FormInput required type="email" placeholder="name@example.com" cId="emailInput" label="Email address" name="user_email" />
                </Form.Group>
            </Row>
            <Row className="mt-3">
                <Form.Group as={Col}>
                    <FormTextArea required label="Message" placeholder="Message" cId="msgInput" name="message" />
                </Form.Group>
            </Row>
            <Button type="submit">Send</Button>
        </Form>
    );
}

export default ContactForm;