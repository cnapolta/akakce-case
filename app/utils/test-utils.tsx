import { render as testingLibraryRender, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const customRender = (ui: React.ReactElement) => {
  return testingLibraryRender(ui, {
    wrapper: BrowserRouter,
  });
};

export { customRender as render, screen };
