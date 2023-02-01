import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

import Button from "./Button";

describe("<Button/>", () => {
  test("renders", () => {
    render(<Button label=""/>)
    expect(screen.getByTestId("button")).toBeInTheDocument();
  });

  test("renders props.label",  () => {
    render(<Button label="Hello World" />);
    expect(screen.getByTestId("button")).toHaveTextContent("Hello World");
  });
});