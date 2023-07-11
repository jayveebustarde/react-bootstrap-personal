import React from "react";
import MainWrapper from "../../components/MainWrapper/MainWrapper";
import Section from "../../components/Section/Section";
import { Col, Row, Stack } from "react-bootstrap";

const ProjectDetails = () => {
    return (
        <MainWrapper>
            <Section isHeader>
                <Row className="justify-content-md-center">
                    <Col xs lg="8">
                        <Stack gap={1} className="stack-justify">
                            <h1>Case Study: Project Name</h1>
                            <p>Project intro goes here. In the intro it's a good idea to answer a potential client's need/problem so it's more likely to land your next project or job.</p>
                        </Stack>
                    </Col>
                </Row>
            </Section>
        </MainWrapper>
    );
};

export default ProjectDetails;