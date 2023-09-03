import React from "react";
import { render } from "@testing-library/react";
import PfButton from "./PfButton";

describe("<PfButton />", () => {
  it("renders correctly with given props and children", () => {
    const { getByText } = render(
      <PfButton type="button" variant="primary">
        Click me!
      </PfButton>,
    );

    // Check if button text is correct
    const buttonElement = getByText("Click me!");
    expect(buttonElement).toBeInTheDocument();

    // Check if button has a specific class
    expect(buttonElement.closest("button")).toHaveClass("pf-btn");

    // Check if button type and variant is set correctly
    expect(buttonElement.closest("button")).toHaveAttribute("type", "button");
    expect(buttonElement.closest("button")).toHaveClass("btn-primary");
  });

});
