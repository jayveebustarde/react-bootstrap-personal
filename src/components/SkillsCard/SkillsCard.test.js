import { render, screen, waitFor, act } from "@testing-library/react";
import SkillsCard from "./SkillsCard";
import IconMap from "../IconMap/IconMap";

jest.mock("../IconMap/IconMap", () => ({
  icon1: () => <i className="icon1">Icon1</i>,
  icon2: () => <i className="icon2">Icon2</i>,
}));

describe("<SkillsCard />", () => {
  const mockTools = [
    { icon: "icon1", name: "Icon 1", color: "red" },
    { icon: "icon2", name: "Icon 2", color: "blue" },
  ];
  beforeEach(() => {
    act(() => {
      render(<SkillsCard tools={mockTools}>Child content</SkillsCard>);
    });
  });

  it("renders correctly", () => {
    expect(screen.getByText("Child content")).toBeInTheDocument();
  });

  // it("displays fallback content during suspense", () => {
  //   expect(screen.getByText("Loading...")).toBeInTheDocument();
  // });

  // it("displays icons and tooltips correctly", async () => {
  //   await waitFor(() => {
  //     expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  //     expect(screen.getByText("Icon 1")).toBeInTheDocument();
  //     expect(screen.getByText("Icon 2")).toBeInTheDocument();
  //   });
  // });
});
