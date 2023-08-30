import React from "react";
import { Link } from "react-router-dom";
import PfButton from "../PfButton/PfButton";
import { HiArrowCircleRight } from "react-icons/hi";

const ProjectsLink = () => {
  return (
    <Link to="/projects" className="text-center">
      <PfButton variant="primary">
        <HiArrowCircleRight className="fs-5" /> View Portfolio
      </PfButton>
    </Link>
  );
};

export default ProjectsLink;
