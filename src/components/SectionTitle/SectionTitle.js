import React from "react";
import "./SectionTitle.scss";

const SectionTitle = ({ children }) => {
    return (
        <h2 className="section-title mb-3">{children}</h2>
    );
}

export default SectionTitle;