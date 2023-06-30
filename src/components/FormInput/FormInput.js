import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";

const FormInput = ({ label, placeholder, type, cId, required }) => {
    return (
        <FloatingLabel controlId={cId} label={label} >
            <Form.Control type={type} placeholder={placeholder} size="sm" />
        </FloatingLabel>
    );
}

export default FormInput;