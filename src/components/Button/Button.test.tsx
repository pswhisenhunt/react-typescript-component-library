import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  test("renders the Button compoenent", () => {
    render(<Button label="Hello World" />);
  });
});