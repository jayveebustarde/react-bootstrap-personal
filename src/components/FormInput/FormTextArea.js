import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";

const FormTextArea = ({ label, placeholder, cId }) => {
    return (
        <FloatingLabel controlId={cId} label={label}>
            <Form.Control as="textarea" placeholder={placeholder} style={{ height: '150px' }} />
        </FloatingLabel>
    );
}

export default FormTextArea;