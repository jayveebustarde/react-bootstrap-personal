import React from "react";
import MainWrapper from "../../components/MainWrapper/MainWrapper";
import Section from "../../components/Section/Section";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import ContactForm from "../../components/ContactForm/ContactForm";
import PageOverview from "../../components/PageOverview/PageOverview";

const Contact = () => {
  return (
    <MainWrapper>
      <PageOverview title={"Contact"}>
        <p>
          Interested in hiring me for your project or just want to say hi? You
          can fill in the contact form below or send an email to{" "}
          <Link to="mailto:jayvee.bustarde@gmail.com">
            jayvee.bustarde@gmail.com
          </Link>
        </p>
      </PageOverview>
      <Section>
        <Row className="justify-content-md-center">
          <Col xs lg="8">
            <h2 align="center" className="my-3 fw-bold">
              Get In Touch
            </h2>
            <ContactForm />
          </Col>
        </Row>
      </Section>
    </MainWrapper>
  );
};

export default Contact;
