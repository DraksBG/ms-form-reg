import React from "react";
import { render, screen } from "@testing-library/react";
import UserDetail from "./UserDetail";

describe("UserDetail", () => {
  it("renders inital component with the correct sentances", () => {
    render(<UserDetail />);
    const firstSentance = screen.getByText(/enter your details below./i);
    const secondSentance = screen.getByTestId("second-sentance");
    expect(firstSentance).toBeInTheDocument();
    expect(secondSentance).toBeInTheDocument();
  });
  it("renders first and last name inputs", () => {
    render(<UserDetail />);
    expect(screen.getByTestId("first-name-input")).toBeInTheDocument();
    expect(screen.getByTestId("last-name-input")).toBeInTheDocument();
  });
  it("renders day, month and year inputs", () => {
    render(<UserDetail />);
    expect(screen.getByTestId("day-input")).toBeInTheDocument();
    expect(screen.getByTestId("month-input")).toBeInTheDocument();
    expect(screen.getByTestId("year-input")).toBeInTheDocument();
  });
  it("renders gender radio inputs", () => {
    render(<UserDetail />);
    expect(screen.getByText("Male")).toBeInTheDocument();
    expect(screen.getByText("Female")).toBeInTheDocument();
  });

  it("renders next page buttons", () => {
    render(<UserDetail />);
    expect(screen.getByText("CONTINUE")).toBeInTheDocument();
  });
});
