import { useRef, useState, useEffect } from 'react';
import { Alert, Col, Form, Row, Spinner } from 'react-bootstrap';
import { sendForm } from '@emailjs/browser';
import { IoIosSend } from 'react-icons/io';
import FormInput from '../FormInput/FormInput';
import FormTextArea from '../FormInput/FormTextArea';
import PfButton from '../PfButton/PfButton';
import { getEmailJSConfig } from '../../utils/envValidation';

const INITIAL_FORM_DATA = {
  user_name: '',
  user_email: '',
  message: '',
};

const generateContactNumber = () => (Math.random() * 1000) | 0;

const ContactForm = () => {
  const [validated, setValidated] = useState(false);
  const [disableForm, setDisabledForm] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ status: 0, message: '' });
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [contactNumber, setContactNumber] = useState(() =>
    generateContactNumber(),
  );
  const [emailJSAvailable, setEmailJSAvailable] = useState(true);

  const formRef = useRef();

  // Check if EmailJS is properly configured on mount
  useEffect(() => {
    const config = getEmailJSConfig();
    if (!config) {
      setEmailJSAvailable(false);
      setSubmitStatus({
        status: 2,
        message:
          'Contact form is currently unavailable. Please try again later.',
      });
    }
  }, []);

  // Auto-dismiss success alert after 5 seconds
  useEffect(() => {
    if (submitStatus.status === 1) {
      const timer = setTimeout(
        () => setSubmitStatus({ status: 0, message: '' }),
        5000,
      );
      return () => clearTimeout(timer);
    }
  }, [submitStatus.status]);

  const resetContactNumber = () => {
    setContactNumber(generateContactNumber());
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if EmailJS is configured
    const config = getEmailJSConfig();
    if (!config) {
      setSubmitStatus({
        status: 2,
        message:
          'Contact form is currently unavailable. Please try again later.',
      });
      return;
    }

    setDisabledForm(true);
    setIsSending(true);
    const form = formRef.current;

    if (form.checkValidity()) {
      sendForm(config.serviceId, config.templateId, form, config.apiKey).then(
        () => {
          resetForm();
          setIsSending(false);
          setSubmitStatus({ status: 1, message: 'Email successfully sent.' });
        },
        () => {
          resetContactNumber();
          setIsSending(false);
          setSubmitStatus({ status: 2, message: 'Failed to send email.' });
          setDisabledForm(false);
        },
      );
    } else {
      event.stopPropagation();
      setDisabledForm(false);
      setIsSending(false);
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
        variant={submitStatus.status === 1 ? 'success' : 'danger'}
        show={submitStatus.status !== 0}
        onClose={() => setSubmitStatus({ status: 0, message: '' })}
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
        <fieldset disabled={disableForm || !emailJSAvailable}>
          <Row>
            <Form.Control
              type='hidden'
              name='contact_number'
              value={contactNumber}
            />
            <Form.Group as={Col} xs={6}>
              <FormInput
                type='text'
                placeholder='John Doe'
                cId='nameInput'
                label='Name'
                name='user_name'
                value={formData.user_name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} xs={6}>
              <FormInput
                type='email'
                placeholder='name@example.com'
                cId='emailInput'
                label='Email address'
                name='user_email'
                value={formData.user_email}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <Row className='mt-3'>
            <Form.Group as={Col}>
              <FormTextArea
                label='Message'
                placeholder='Message'
                cId='msgInput'
                name='message'
                value={formData.message}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <PfButton type='submit' disabled={isSending}>
            {isSending ? (
              <>
                <Spinner
                  as='span'
                  animation='border'
                  size='sm'
                  role='status'
                  aria-hidden='true'
                  className='me-2'
                />
                Sending...
              </>
            ) : (
              <><IoIosSend /> Send Now</>
            )}
          </PfButton>
        </fieldset>
      </Form>
    </>
  );
};

export default ContactForm;
