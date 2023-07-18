import React from "react";
import { Col, Image, Row, Stack } from "react-bootstrap";
import MinorText from "../MinorText/MinorText";
import "./ProjectCard.scss"

const ProjectCard = ({ project }) => {
    // const projImg = imp
    return (
        <Row className="project-card g-0">
            <Col xs md={5} className="project-image-container">
                <Image src={require(`../../assets/images/${project.img}`)} alt="ProjectImage" className="project-card-img" />
            </Col>
            <Col xs md={7} className="px-3">
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