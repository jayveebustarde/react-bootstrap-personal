import React from "react";
import "./MinorText.scss";

const MinorText = ({ children }) => {
    return (
        <p className="minor-text">{children}</p>
    );
}

export default MinorText;