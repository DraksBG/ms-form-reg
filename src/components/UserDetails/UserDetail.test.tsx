import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UserDetail from "./UserDetail";
import { UserDetailsContex } from "../../context/UserDetailsContext";

import {
  VALID_FIRST_NAMES,
  VALID_DAY,
  VALID_MONTH,
  VALID_YEAR,
} from "../../lib/validators/regex";
import {
  INamesInputsFields,
  INamesInputErrors,
  IBirthDayInputsFields,
  IBirthDayInputsErrors,
} from "./UserDetails.type";

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
  it("renderds all inputs with mocked data to be filled", () => {
    const mockInputs = {
      firstName: "SomeName",
      lastName: "LsatName",
      gender: "Male",
    };
    const mockInputsErrors = {
      firstName: { valid: true, errorMessage: "" },
      lastName: { valid: true, errorMessage: "" },
      gender: { valid: true, errorMessage: "" },
    };
    const mockBirthDayInputs = {
      day: "01",
      month: "31",
      year: "1994",
    };
    const mockBirthDayInputsErrors = {
      day: { valid: true, errorMessage: "" },
      month: { valid: true, errorMessage: "" },
      year: { valid: true, errorMessage: "" },
    };
    const handleChange = jest.fn();
    const inputs: INamesInputsFields = mockInputs;
    const inputErrors: INamesInputErrors = mockInputsErrors;
    const birthDayInputs: IBirthDayInputsFields = mockBirthDayInputs;
    const birthDayInputErrors: IBirthDayInputsErrors = mockBirthDayInputsErrors;
    const storeValues = {
      inputs,
      inputErrors,
      birthDayInputs,
      birthDayInputErrors,
      handleChange,
    };
    render(
      <UserDetailsContex.Provider value={storeValues}>
        <UserDetail />
      </UserDetailsContex.Provider>
    );
    expect(screen.getByTestId("first-name-input")).toHaveValue(
      mockInputs.firstName
    );
    expect(screen.getByTestId("last-name-input")).toHaveValue(
      mockInputs.lastName
    );
    expect(screen.getByTestId("day-input")).toHaveValue(mockBirthDayInputs.day);
    expect(screen.getByTestId("month-input")).toHaveValue(
      mockBirthDayInputs.month
    );
    expect(screen.getByTestId("year-input")).toHaveValue(
      mockBirthDayInputs.year
    );
  });
  it("Check if the user can type on the inputs and if the regex are vlid", () => {
    render(<UserDetail />);
    const isNameValid = new RegExp(VALID_FIRST_NAMES);
    const isDayValid = new RegExp(VALID_DAY);
    const isMonthValid = new RegExp(VALID_MONTH);
    const isYearValid = new RegExp(VALID_YEAR);

    const firstNameInput = screen.getByTestId(
      "first-name-input"
    ) as HTMLInputElement;
    const lastNameInput = screen.getByTestId(
      "last-name-input"
    ) as HTMLInputElement;
    const dayInput = screen.getByTestId("day-input") as HTMLInputElement;
    const monthInput = screen.getByTestId("month-input") as HTMLInputElement;
    const yearInput = screen.getByTestId("year-input") as HTMLInputElement;

    fireEvent.change(firstNameInput, { target: { value: "SomeName" } });
    fireEvent.change(lastNameInput, { target: { value: "LsatName" } });
    fireEvent.change(dayInput, { target: { value: "01" } });
    fireEvent.change(monthInput, { target: { value: "12" } });
    fireEvent.change(yearInput, { target: { value: "1994" } });

    expect(firstNameInput).toHaveValue("SomeName");
    expect(lastNameInput).toHaveValue("LsatName");
    expect(dayInput).toHaveValue("01");
    expect(monthInput).toHaveValue("12");
    expect(yearInput).toHaveValue("1994");

    expect(isNameValid.test(firstNameInput.value)).toBeTruthy();
    expect(isNameValid.test(lastNameInput.value)).toBeTruthy();
    expect(isDayValid.test(dayInput.value)).toBeTruthy();
    expect(isMonthValid.test(monthInput.value)).toBeTruthy();
    expect(isYearValid.test(yearInput.value)).toBeTruthy();
  });

  it("Checks if the regex are unvalid", () => {
    render(<UserDetail />);
    const isNameValid = new RegExp(VALID_FIRST_NAMES);
    const isDayValid = new RegExp(VALID_DAY);
    const isMonthValid = new RegExp(VALID_MONTH);
    const isYearValid = new RegExp(VALID_YEAR);

    const firstNameInput = screen.getByTestId(
      "first-name-input"
    ) as HTMLInputElement;
    const lastNameInput = screen.getByTestId(
      "last-name-input"
    ) as HTMLInputElement;
    const dayInput = screen.getByTestId("day-input") as HTMLInputElement;
    const monthInput = screen.getByTestId("month-input") as HTMLInputElement;
    const yearInput = screen.getByTestId("year-input") as HTMLInputElement;

    fireEvent.change(firstNameInput, { target: { value: "Some1Name" } });
    fireEvent.change(lastNameInput, { target: { value: "Lsat1Name" } });
    fireEvent.change(dayInput, { target: { value: "32" } });
    fireEvent.change(monthInput, { target: { value: "13" } });
    fireEvent.change(yearInput, { target: { value: "1899" } });

    expect(isNameValid.test(firstNameInput.value)).toBeFalsy();
    expect(isNameValid.test(lastNameInput.value)).toBeFalsy();
    expect(isDayValid.test(dayInput.value)).toBeFalsy();
    expect(isMonthValid.test(monthInput.value)).toBeFalsy();
    expect(isYearValid.test(yearInput.value)).toBeFalsy();
  });

});
