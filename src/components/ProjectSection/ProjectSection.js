import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const ProjectSection = ({ projectSection }) => {
    return (
        <section className="mb-3">
            <p className={projectSection.isMainSection ? "h3 fw-bold" : "lead fw-bold text-muted" }>{projectSection.title}</p>
            {projectSection.content && (
                <Row>
                    <Col lg={projectSection.imgInline ? 6 : 12}>
                        {projectSection.content.map((item, ix) => <p key={ix}>{item}</p>)}
                    </Col>
                    {projectSection.imgInline && (
                        <Col lg={6}>
                            <Image className="project-section-img rounded-4" src={require(`../../assets/images/${projectSection.images[0]}`)} />
                        </Col>
                    )}
                </Row>)}
            {projectSection.images && projectSection.images.length > 0 && !projectSection.imgInline && (
                <Row className="mb-3 mt-3">
                    {projectSection.images.map((img, ix) => (
                        <Col key={ix} lg={12/(projectSection.images.length)}>
                            <Image className="project-section-img rounded-3" src={require(`../../assets/images/${img}`)} />
                        </Col>))}
                </Row>)
            }
        </section>
    );
}

export default ProjectSection;