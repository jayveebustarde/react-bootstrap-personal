import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";

const FormInput = ({ label, placeholder, type, cId, name, value, onChange, optional = false }) => {
    return (
        <Form.Group>
            <FloatingLabel controlId={cId} label={label} >
                <Form.Control type={type} placeholder={placeholder} size="sm" name={name}  value={value} onChange={onChange} required={!optional} />
            </FloatingLabel>
        </Form.Group>
    );
}

export default FormInput;