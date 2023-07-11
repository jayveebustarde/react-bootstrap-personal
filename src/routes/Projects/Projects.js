import React from "react";
import MainWrapper from "../../components/MainWrapper/MainWrapper";
import Section from "../../components/Section/Section";
import { Col, Row } from "react-bootstrap";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Projects = () => {
    return (
        <MainWrapper>
            <Section isHeader>
                <h1>Portfolio</h1>
            </Section>
            <Section>
                <Row className="mt-2 g-5">
                    <Col xs md={6}>
                        <ProjectCard project={{title: "Project Title", overview : "Lorem ipsum dolor ametLorem ipsum dolor ametLorem ipsum dolor ametLorem ipsum dolor amet", client:"X corp"}}></ProjectCard>
                    </Col>
                </Row>
            </Section>
        </MainWrapper>
    );
};

export default Projects;