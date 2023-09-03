import { act, render } from "@testing-library/react";
import { Chrono } from "react-chrono";
import App from "./App";

jest.mock("react-pdf", () => ({
  Document: () => <div>Mocked Document</div>,
  Page: () => <div>Mocked Page</div>,
  pdfjs: {
    GlobalWorkerOptions: {},
  },
}));
global.scrollTo = jest.fn();
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
jest.mock("react-chrono", () => ({
  ...jest.requireActual("react-chrono"), // This will preserve other exports from `react-chrono`
  Chrono: jest.fn(() => <div>Mocked Chrono</div>), // Here we"re mocking Chrono to return a simple div for test purposes
}));

afterEach(() => {
  jest.clearAllMocks();
});

it("renders without crashing", async () => {
  await act(async () => {
    render(<App />);
  });
});
