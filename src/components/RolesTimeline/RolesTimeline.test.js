import React from "react";
import { render } from "@testing-library/react";
import { ProfileDataContext } from "../../contexts/ProfileContext/ProfileContext";
import RolesTimeline from "./RolesTimeline";

describe("<RolesTimeline />", () => {
  const mockContextValue = {
    roles: [
      {
        title: "2023 - 2023",
        cardTitle: "Role 1",
        cardSubtitle: "Role 1 address",
        cardDetailedText: "Role 1 details",
      },
    ],
  };
  it("renders correctly", () => {
    render(
      <ProfileDataContext.Provider value={mockContextValue}>
        <RolesTimeline />
      </ProfileDataContext.Provider>,
    );
  });
});
