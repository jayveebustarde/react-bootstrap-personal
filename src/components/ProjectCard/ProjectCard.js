import React from "react";
import { Col, Image, Row, Stack } from "react-bootstrap";
import MinorText from "../MinorText/MinorText";
import "./ProjectCard.scss";
import { Link } from "react-router-dom";
import PfButton from "../PfButton/PfButton";
import { BiSolidShow } from "react-icons/bi";

const ProjectCard = ({ project }) => {
  // const projImg = imp
  return (
    <div className="hoverable-card">
      <Row className="project-card g-0">
        <Col xs md={5} className="project-image-container">
          <Image
            src={require(`../../assets/images/${project.img}`)}
            alt="ProjectImage"
            className="project-card-img"
          />
        </Col>
        <Col xs md={7} className="px-3">
          <Stack>
            <h5 className="my-3">{project.title}</h5>
            <MinorText>{project.overview}</MinorText>
            <p className="mt-auto">
              <small className="text-muted">Client: {project.client}</small>
            </p>
            <div className="mt-auto">
              {project.tech?.map((item, index) => {
                return (
                  <span
                    key={index}
                    className="badge rounded-pill text-bg-secondary me-1"
                  >
                    {item}
                  </span>
                );
              })}
            </div>
          </Stack>
        </Col>
      </Row>
      {project.hasCaseStudy && (
        <div className="card-overlay">
          <Link to={"/projects/" + project.id}>
            <PfButton variant="dark">
              <BiSolidShow className="fs-4" /> View Case Study
            </PfButton>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
