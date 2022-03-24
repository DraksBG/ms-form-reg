import React from "react";
import { render, screen } from "@testing-library/react";
import ContactDetail from "./ContactDetail";

describe("ContactDetail", () => {
  it("renders inital component", () => {
    render(<ContactDetail />);
    screen.getByText(/Contact Details/i);
  });
});
