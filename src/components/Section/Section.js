import React from "react";
import { Container } from "react-bootstrap";
import "../Section/Section.scss";

const Section = ({ isHeader, children }) => {
    const sectionClass = "p-3 p-lg-5 section" + (isHeader ? " bg-light" : "");
    return (
        <section className={sectionClass}>
            <Container>
                {children}
            </Container>
        </section>
    );
}

export default Section;