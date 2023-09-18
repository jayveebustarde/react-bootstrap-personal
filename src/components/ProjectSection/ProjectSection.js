import React, { useContext } from "react";
import { Col, Image, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import IconMap from "../IconMap/IconMap.js";
import { ProjectContext } from "../../contexts/ProjectContext/ProjectContext";
import "../ProjectSection/ProjectSection.scss";

const ProjectSection = ({ projectSection }) => {
  const { project } = useContext(ProjectContext);

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
      {projectSection.displayTools && (
        <Row md="auto" className="justify-content-center">
          {project.tech.map((item, index) => {
            const tool = IconMap[item];
            if (!tool) return null;
            const iconStyle = { color: tool.color };
            return (
              <Col key={index} className="text-center p-3">
                <OverlayTrigger
                  overlay={<Tooltip id={tool.name}>{tool.name}</Tooltip>}
                  placement="top"
                >
                  <span className="">
                    <tool.icon style={iconStyle} className="proj-tech" />
                  </span>
                </OverlayTrigger>
              </Col>
            );
          })}
        </Row>
      )}
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
