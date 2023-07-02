import React from "react";
import "./PfButton.scss";
import { Button } from "react-bootstrap";

const PfButton = ({ type, variant, children }) => {
    return (
        <Button type={type} variant={variant} className="pf-btn my-2">
            {children}
        </Button>
    );
}

export default PfButton;