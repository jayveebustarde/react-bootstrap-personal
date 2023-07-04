import React from "react";
import "./PfButton.scss";
import { Button } from "react-bootstrap";

const PfDlButton = ({ href, fileName, variant, children }) => {
    return (
        <Button variant={variant} href={href} download={fileName} className="pf-btn my-2">
            {children}
        </Button>
    );
}

export default PfDlButton;