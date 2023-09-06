import React, { useEffect, useRef, useState } from "react";
import { Alert, Col, Form, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { IoIosSend } from "react-icons/io";
import FormInput from "../FormInput/FormInput";
import FormTextArea from "../FormInput/FormTextArea";
import PfButton from "../PfButton/PfButton";

const INITIAL_FORM_DATA = {
  user_name: "",
  user_email: "",
  message: "",
};

const ContactForm = () => {
  const [validated, setValidated] = useState(false);
  const [disableForm, setDisabledForm] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ status: 0, message: "" });
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [contactNumber, setContactNumber] = useState("");

  const formRef = useRef();

  useEffect(() => {
    resetContactNumber();
  }, []);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const resetContactNumber = () => setContactNumber((Math.random() * 1000) | 0);

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisabledForm(true);
    const form = formRef.current;

    if (form.checkValidity()) {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          form,
          process.env.REACT_APP_EMAILJS_API_KEY,
        )
        .then(
          (result) => {
            resetForm();
            setSubmitStatus({ status: 1, message: "Email successfully sent." });
          },
          () => {
            resetContactNumber();
            setSubmitStatus({ status: 2, message: "Failed to send email." });
            setDisabledForm(false);
          },
        );
    } else {
      event.stopPropagation();
      setDisabledForm(false);
    }
    setValidated(true);
  };

  const resetForm = () => {
    setFormData(INITIAL_FORM_DATA);
    resetContactNumber();
    setDisabledForm(false);
    setValidated(false);
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <>
      <Alert
        variant={submitStatus.status === 1 ? "success" : "danger"}
        show={submitStatus.status !== 0}
        onClose={() => setSubmitStatus({ status: 0, message: "" })}
        dismissible
      >
        {submitStatus.message}
      </Alert>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <fieldset disabled={disableForm}>
          <Row>
            <Form.Control
              type="hidden"
              name="contact_number"
              value={contactNumber}
            />
            <Form.Group as={Col} xs={6}>
              <FormInput
                type="text"
                placeholder="John Doe"
                cId="nameInput"
                label="Name"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} xs={6}>
              <FormInput
                type="email"
                placeholder="name@example.com"
                cId="emailInput"
                label="Email address"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <Row className="mt-3">
            <Form.Group as={Col}>
              <FormTextArea
                label="Message"
                placeholder="Message"
                cId="msgInput"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <PfButton type="submit">
            <IoIosSend /> Send Now
          </PfButton>
        </fieldset>
      </Form>
    </>
  );
};

export default ContactForm;
