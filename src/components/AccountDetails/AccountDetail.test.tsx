import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import AccountDetails from "./AccountDetails";
import user from "@testing-library/user-event";
import {
  VALID_EMAIL_REG,
  VALID_PASSWORD_REG,
} from "../../lib/validators/regex";

describe("AccountDetail", () => {
  it("renders inital component", () => {
    render(<AccountDetails />);
    screen.getByText(/security questions/i);
  });

  it("user types on input fields", () => {
    render(<AccountDetails />);
    const emailInput = screen.getByTestId("email");
    const passwordInput = screen.getByTestId("password");
    const securityQuestionAInput = screen.getByTestId("security-question-1");
    const securityQuestionBInput = screen.getByTestId("security-question-2");

    fireEvent.change(emailInput, { target: { value: "some@email.com" } });
    fireEvent.change(passwordInput, { target: { value: "1234567asd" } });
    fireEvent.change(securityQuestionAInput, {
      target: { value: "some question" },
    });
    fireEvent.change(securityQuestionBInput, {
      target: { value: "some question" },
    });

    const button = screen.getByTestId("continue-button");

    user.click(button);

    expect(emailInput).toHaveValue("some@email.com");
    expect(passwordInput).toHaveValue("1234567asd");
    expect(securityQuestionAInput).toHaveValue("some question");
    expect(securityQuestionBInput).toHaveValue("some question");
    expect(button).toBeInTheDocument();
  });

  it("Testing valid Regex values", () => {
    render(<AccountDetails />);
    const isEmailValid = new RegExp(VALID_EMAIL_REG);
    const isPasswordValid = new RegExp(VALID_PASSWORD_REG);

    const emailInput = screen.getByTestId("email") as HTMLInputElement;
    const passwordInput = screen.getByTestId("password") as HTMLInputElement;

    fireEvent.change(emailInput, { target: { value: "some@email.com" } });
    fireEvent.change(passwordInput, { target: { value: "1234567asd" } });

    expect(isEmailValid.test(emailInput.value)).toBeTruthy();
    expect(isPasswordValid.test(passwordInput.value)).toBeTruthy();
  });

  it("Testing unvalid Regex values", () => {
    render(<AccountDetails />);
    const isEmailValid = new RegExp(VALID_EMAIL_REG);
    const isPasswordValid = new RegExp(VALID_PASSWORD_REG);

    const emailInput = screen.getByTestId("email") as HTMLInputElement;
    const passwordInput = screen.getByTestId("password") as HTMLInputElement;

    fireEvent.change(emailInput, { target: { value: "someemail.com" } });
    fireEvent.change(passwordInput, { target: { value: "123456798" } });

    expect(isEmailValid.test(emailInput.value)).toBeFalsy();
    expect(isPasswordValid.test(passwordInput.value)).toBeFalsy();
  });
});
