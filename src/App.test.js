import { render } from "@testing-library/react";
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
jest.mock("react-chrono", () => {
  return {
    __esModule: true,
    default: () => {
      return <div>Mocked Chrono</div>;
    },
  };
});
afterEach(() => {
  jest.clearAllMocks();
});

it("renders without crashing", () => {
  render(<App />);
});
