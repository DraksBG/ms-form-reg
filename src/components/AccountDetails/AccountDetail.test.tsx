import React from "react";
import { render, screen } from "@testing-library/react";
import AccountDetail from "./AccountDetail";

describe("AccountDetail", () => {
  it("renders inital component", () => {
    render(<AccountDetail />);
    screen.getByText(/Account Details Page/i);
  });
});
