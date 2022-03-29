import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import AccountDetail from "./AccountDetail";
import user from "@testing-library/user-event";

describe("AccountDetail", () => {
  it("renders inital component", () => {
    render(<AccountDetail />);
    screen.getByText(/security questions/i);
  });

  it("user types on input fields", () => {
    render(<AccountDetail />);
    const emailInput = screen.queryByTestId("email");
    const passwordInput = screen.queryByTestId("password");
    const securityQuestionAInput = screen.queryByTestId("security-question-1");
    const securityQuestionBInput = screen.queryByTestId("security-question-2");

    if (
      emailInput &&
      passwordInput &&
      securityQuestionAInput &&
      securityQuestionBInput
    ) {
      fireEvent.change(emailInput, { target: { value: "some@email.com" } });
      fireEvent.change(passwordInput, { target: { value: "1234567asd" } });
      fireEvent.change(securityQuestionAInput, {
        target: { value: "some question" },
      });
      fireEvent.change(securityQuestionBInput, {
        target: { value: "some question" },
      });
    }
    const button = screen.queryByTestId("continue-button");
    if (button) {
      user.click(button);
    }
    const form = screen.queryByTestId("form");
    if (form) {
      fireEvent.submit(form);
    }
    expect(emailInput).toHaveValue("some@email.com");
    expect(passwordInput).toHaveValue("1234567asd");
    expect(securityQuestionAInput).toHaveValue("some question");
    expect(securityQuestionBInput).toHaveValue("some question");
    expect(button).toBeInTheDocument();

  });
});
