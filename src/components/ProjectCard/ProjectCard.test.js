import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ProjectCard from "./ProjectCard";

// Mocking the Image component to avoid actually loading the image
// jest.mock("react-bootstrap", () => {
//   const originalModule = jest.requireActual("react-bootstrap");
//   return {
//     ...originalModule,
//     Image: jest.fn(() => <img data-testid="mocked-image" />),
//   };
// });

describe("ProjectCard", () => {
  const mockProject = {
    id: "123",
    title: "Sample Project",
    overview: "This is a test project.",
    client: "Test Client",
    img: "bwprofile.jpg",
    tech: ["React", "Node"],
    hasCaseStudy: true,
  };

  beforeEach(() => {
    render(
      <Router>
        <ProjectCard project={mockProject} />
      </Router>,
    );
  });

  it("displays the project title", () => {
    expect(screen.getByText("Sample Project")).toBeInTheDocument();
  });

  it("displays the project overview", () => {
    expect(screen.getByText("This is a test project.")).toBeInTheDocument();
  });

  it("displays the project client", () => {
    expect(screen.getByText("Client: Test Client")).toBeInTheDocument();
  });

  it("renders the project technologies", () => {
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Node")).toBeInTheDocument();
  });

  // it("renders the project image", () => {
  //   const image = screen.getByAltText("ProjectImage");
  //   expect(image).toBeInTheDocument();
  //   expect(image.src).toContain("mockedPathToImage");
  // });

  it("renders the case study link if hasCaseStudy is true", () => {
    expect(screen.getByText("View Case Study")).toBeInTheDocument();
  });
});
