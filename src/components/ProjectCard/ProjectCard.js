import React from "react";
import { Col, Image, Row, Stack } from "react-bootstrap";
import projectImg from "../../assets/images/edenred.png";
import MinorText from "../MinorText/MinorText";
import "./ProjectCard.scss"

const ProjectCard = ({ project }) => {
    return (
        <Row className="project-card">
            <Col xs md={5} className="image-container">
                <Image src={projectImg} alt="ProjectImage" className="project-card-img" />
            </Col>
            <Col xs md={7}>
                <Stack>
                    <h5 className="my-3">{project.title}</h5>
                    <MinorText>{project.overview}</MinorText>
                    <p className="mt-auto">
                        <small className="text-muted">Client: {project.client}</small>
                    </p>
                </Stack>
            </Col>
        </Row>
    );
}

export default ProjectCard;