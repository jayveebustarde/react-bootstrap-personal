import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";

const FormTextArea = ({
  label,
  placeholder,
  cId,
  name,
  value,
  onChange,
  optional = false,
}) => {
  return (
    <FloatingLabel controlId={cId} label={label}>
      <Form.Control
        as="textarea"
        placeholder={placeholder}
        style={{ height: "150px" }}
        name={name}
        value={value}
        onChange={onChange}
        required={!optional}
      />
    </FloatingLabel>
  );
};

export default FormTextArea;
