import React from "react";
import Section from "../Section/Section";
import { Col, Row, Stack } from "react-bootstrap";

const PageOverview = ({ children }) => {
    return (
        <Section isHeader>
            <Row className="justify-content-md-center">
                <Col xs lg="8">
                    <Stack gap={1} className="stack-justify">
                        {children}
                    </Stack>
                </Col>
            </Row>
        </Section>
    );
}

export default PageOverview;