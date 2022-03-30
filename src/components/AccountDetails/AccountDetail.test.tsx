import React from "react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { fireEvent, render, screen } from "@testing-library/react";
import AccountDetails from "./AccountDetails";
import user from "@testing-library/user-event";
import {
  VALID_EMAIL_REG,
  VALID_PASSWORD_REG,
} from "../../lib/validators/regex";
import {
  AccountDetalsContext,
  IAccountDetailsContextProps,
} from "../../context/AcountDetailsContext";
import { InputsInitiaState } from "./AccountDetails.type";
import { createMockRouter } from "../../lib/test-utils/createMockRouter";

describe("AccountDetail", () => {
  it("renders inital component", () => {
    render(<AccountDetails />);
    screen.getByText(/security questions/i);
  });

  it("user types on input fields", () => {
    const router = createMockRouter({ push: jest.fn() });
    render(
      <RouterContext.Provider value={router}>
        <AccountDetails />
      </RouterContext.Provider>
    );
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
    fireEvent.click(button);

    user.click(button);
    expect(emailInput).toHaveValue("some@email.com");
    expect(passwordInput).toHaveValue("1234567asd");
    expect(securityQuestionAInput).toHaveValue("some question");
    expect(securityQuestionBInput).toHaveValue("some question");
    expect(button).toBeInTheDocument();
    expect(button).not.toBeEnabled();
    expect(button).toHaveAttribute("disabled");
  });

  it("testing context provider with inital values", () => {
    const mockState = {
      initial: {
        email: "some@email.com",
        password: "1234567asd",
        secretQuestionA: "some question",
        secretQuestionB: "some question",
      },
      valuesValidate: {
        email: { valid: false, errorMessage: "" },
        password: { valid: false, errorMessage: "" },
        secretQuestionA: { valid: false, errorMessage: "" },
        secretQuestionB: { valid: false, errorMessage: "" },
      },
    };

    const setInputs = jest.fn();
    const inputs: InputsInitiaState = mockState;
    const storeValues: IAccountDetailsContextProps = {
      inputs,
      setInputs,
    };

    render(
      <AccountDetalsContext.Provider value={storeValues}>
        <AccountDetails />
      </AccountDetalsContext.Provider>
    );
    const emailInput = screen.getByTestId("email");
    const passwordInput = screen.getByTestId("password");
    const securityQuestionAInput = screen.getByTestId("security-question-1");
    const securityQuestionBInput = screen.getByTestId("security-question-2");

    expect(emailInput).toHaveValue("some@email.com");
    expect(passwordInput).toHaveValue("1234567asd");
    expect(securityQuestionAInput).toHaveValue("some question");
    expect(securityQuestionBInput).toHaveValue("some question");
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
