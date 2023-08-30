import React, { useContext } from "react";
import { Col, Image, Row, Stack } from "react-bootstrap";
import { FaIndustry } from "react-icons/fa";
import { FaLink, FaLocationDot } from "react-icons/fa6";
import { ProjectContext } from "../../contexts/ProjectContext/ProjectContext";

const ProjectOverview = () => {
  const { project } = useContext(ProjectContext);
  return (
    <Row className="project-overview p-3 mx-0 mb-5 gx-5">
      <Col lg="3" className="project-image-container">
        <Image
          src={require(`../../assets/images/${project.image}`)}
          alt="ProjectImage"
          className="project-intro-img rounded-2"
        />
      </Col>
      <Col>
        <Stack gap={2}>
          <h2 className="fw-bold">{project.client}</h2>
          <span>
            <FaLocationDot /> <strong>Address:</strong> {project.address}
          </span>
          <span>
            <FaIndustry /> <strong>Industry:</strong> {project.industry}
          </span>
          {project.website && (
            <span>
              <FaLink /> <strong>Website:</strong>{" "}
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.website}
              </a>
            </span>
          )}
          <br />
          <h5>Project requirements:</h5>
          <ul>
            {project.requirements.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </Stack>
      </Col>
    </Row>
  );
};

export default ProjectOverview;
