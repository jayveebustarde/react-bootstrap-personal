import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import ProjectCard from "../ProjectCard/ProjectCard";
import { ProfileDataContext } from "../../contexts/ProfileContext/ProfileContext";

const ProjectList = () => {
    const profile = useContext(ProfileDataContext);
    return (
        <Row className="g-5 py-4">
            {profile.projects.map((item, index) => {
                return (
                    <Col key={index} sm={12} md={6}>
                        <ProjectCard project={item}></ProjectCard>
                    </Col>
                );
            })}
        </Row>
    );
}

export default ProjectList;