import React from "react";
import PfButton from "../PfButton/PfButton";
import { IoIosSend } from "react-icons/io";
import PageOverview from "../PageOverview/PageOverview";
import { Link } from "react-router-dom";

const ProjectFooter = () => {
  const title = "Want me to help with your project?";
  const subtitle = `I am continually eager to engage in intriguing projects and welcome
      opportunities to explore how my skills can complement your team. Please
      feel free to reach out if you believe I’d be a good fit for your projects.`;
  return (
    <PageOverview title={title} className="project-footer py-lg-5">
      {subtitle}
      <Link to="/contact">
        <PfButton type="submit">
          <IoIosSend /> Hire Me
        </PfButton>
      </Link>
    </PageOverview>
  );
};

export default ProjectFooter;
