import React, { useRef, useState } from "react";
import { Alert, Col, Form, Row } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import { IoIosSend } from "react-icons/io";
import FormInput from "../FormInput/FormInput";
import FormTextArea from "../FormInput/FormTextArea";
import PfButton from "../PfButton/PfButton";

const ContactForm = () => {
    const [validated, setValidated] = useState(false);
    const [disableForm, setDisabledForm] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(0)
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        message: ""
    });

    const formRef = useRef();
    let contactNumber;

    const emailJsConfig = {
        apiKey: process.env.REACT_APP_EMAILJS_API_KEY,
        serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
        templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID
    };

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value 
        })
    };

    const resetContactNumber = () => contactNumber = Math.random() * 1000 | 0;
    resetContactNumber();

    const handleSubmit = (event) => {
        event.preventDefault();
        setDisabledForm(true);
        const form = formRef.current;

        if (form.checkValidity()) {
            emailjs.sendForm(emailJsConfig.serviceId, emailJsConfig.templateId, form, emailJsConfig.apiKey)
            .then((result) => {
                resetForm()
                setSubmitStatus(1);
            }, (error) => {
                resetContactNumber();
                setSubmitStatus(2);
                setDisabledForm(false);
            });
        } else {
            event.stopPropagation();
            setDisabledForm(false);
        }
        setValidated(true);
    };

    const resetForm = () => {
        setFormData({
            user_email: "",
            user_name: "",
            message: ""
        });
        resetContactNumber();
        setDisabledForm(false);
    }

    return (
        <>
            <Alert variant="success" show={submitStatus === 1} onClose={() => setSubmitStatus(0)} dismissible>
                Email successfully sent.
            </Alert>
            <Alert variant="danger" show={submitStatus === 2} onClose={() => setSubmitStatus(0)} dismissible>
                Failed to send email.
            </Alert>
            <Form noValidate validated={validated} onSubmit={handleSubmit} ref={formRef}>
                <fieldset disabled={disableForm}>
                    <Row>
                        <Form.Control type="hidden" name="contact_number" value={contactNumber} />
                        <Form.Group as={Col} xs={6}>
                            <FormInput type="text" placeholder="John Doe" cId="nameInput" label="Name" name="user_name" value={formData.user_name} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group as={Col} xs={6}>
                            <FormInput type="email" placeholder="name@example.com" cId="emailInput" label="Email address" name="user_email" value={formData.user_email} onChange={handleChange} />
                        </Form.Group>
                    </Row>
                    <Row className="mt-3">
                        <Form.Group as={Col}>
                            <FormTextArea label="Message" placeholder="Message" cId="msgInput" name="message" value={formData.message} onChange={handleChange} />
                        </Form.Group>
                    </Row>
                    <PfButton type="submit"><IoIosSend /> Send Now</PfButton>
                </fieldset>
            </Form>
        </>
    );
}

export default ContactForm;