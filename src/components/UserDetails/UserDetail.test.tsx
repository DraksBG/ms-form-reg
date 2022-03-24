import React from "react";
import { render, screen } from "@testing-library/react";
import UserDetail from "./UserDetail";

describe("UserDetail", () => {
  it("renders inital component", () => {
    render(<UserDetail />);
    screen.getByText(/User Details/i);
  });
});
