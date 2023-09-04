import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const ProjectSection = ({ projectSection }) => {
  return (
    <section className="mb-3">
      <p
        className={
          "mb-3 fw-bold " +
          (projectSection.isMainSection ? "h3 mt-3" : "lead text-muted")
        }
      >
        {projectSection.title}
      </p>
      {projectSection.content && (
        <Row>
          <Col xl={projectSection.imgInline ? 6 : 12}>
            {projectSection.content.map((item, ix) => (
              <p key={ix} className="text-justify">
                {item}
              </p>
            ))}
          </Col>
          {projectSection.imgInline && (
            <Col xl={6} className="text-center">
              <Image
                className="project-section-img rounded-4"
                src={require(`../../assets/images/${projectSection.images[0]}`)}
              />
            </Col>
          )}
        </Row>
      )}
      {projectSection.images &&
        projectSection.images.length > 0 &&
        !projectSection.imgInline && (
          <Row className="my-3">
            {projectSection.images.length === 1 && <Col />}
            {projectSection.images.map((img, ix) => (
              <Col
                className="text-center"
                key={ix}
                lg={
                  projectSection.images.length === 1 &&
                  projectSection.fullWidthImg
                    ? 12
                    : 6
                }
              >
                <Image
                  className="project-section-img rounded-3"
                  src={require(`../../assets/images/${img}`)}
                />
              </Col>
            ))}
            {projectSection.images.length === 1 && <Col />}
          </Row>
        )}
    </section>
  );
};

export default ProjectSection;
