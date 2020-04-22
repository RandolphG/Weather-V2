import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";
import React from "react";
import { fetchData } from "../actions/fetchData";

fetchData("zagreb");
test("render the temperature", () => {
  const { container, getByText } = render(<App />);
  expect(getByText());
});
