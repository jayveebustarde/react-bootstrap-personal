import React from "react";
import { Col, Row, Stack } from "react-bootstrap";

const ProjectCard = ({ project }) => {
    return (
        <Row>
            <Col xs md={5}>
            </Col>
            <Col xs md={7}>
                <Stack>
                    <h5>{project.title}</h5>
                    <p>{project.overview}</p>
                    <p>
                        <small className="text-muted">Client: {project.client}</small>
                    </p>
                </Stack>
            </Col>
        </Row>
    );
}

export default ProjectCard;