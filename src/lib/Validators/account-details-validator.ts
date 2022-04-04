import {
  inputValuesErrors,
  IValuesValidate,
} from "../../components/AccountDetails/AccountDetails.type";
import { userDetailsValuesErrors } from "../../components/UserDetails/UserDetails.type";
import {
  VALID_DAY,
  VALID_EMAIL_REG,
  VALID_FIRST_NAMES,
  VALID_MONTH,
  VALID_PASSWORD_REG,
  VALID_YEAR,
} from "./regex";

export const fieldsValidator = (value: string, name: string) => {
  const isEmailValid = new RegExp(VALID_EMAIL_REG);
  const isPasswordValid = new RegExp(VALID_PASSWORD_REG);
  const isNameValid = new RegExp(VALID_FIRST_NAMES);
  const isDayValid = new RegExp(VALID_DAY);
  const isMonthValid = new RegExp(VALID_MONTH);
  const isYearValid = new RegExp(VALID_YEAR);

  switch (name) {
    case "email":
      return {
        valid: isEmailValid.test(value),
        errorMessage: `${
          !isEmailValid.test(value) && value !== ""
            ? inputValuesErrors.email
            : value === ""
            ? inputValuesErrors.emptyEmail
            : ""
        }`,
      };

    case "password":
      return {
        valid: isPasswordValid.test(value),
        errorMessage: `${
          !isPasswordValid.test(value) && value !== ""
            ? inputValuesErrors.password
            : value === ""
            ? inputValuesErrors.emptyPassword
            : ""
        }`,
      };

    case "secretQuestionA":
      return {
        valid: value !== "",
        errorMessage: `${
          value === "" ? inputValuesErrors.emptySecurityQuestionA : ""
        }`,
      };

    case "secretQuestionB":
      return {
        valid: value !== "",
        errorMessage: `${
          value === "" ? inputValuesErrors.emptySecurityQuestionB : ""
        }`,
      };

    case "firstName":
      return {
        valid: isNameValid.test(value),
        errorMessage: `${
          !isNameValid.test(value) && value !== ""
            ? userDetailsValuesErrors.firstName
            : value === ""
            ? userDetailsValuesErrors.emptyFirstName
            : ""
        }`,
      };

    case "lastName":
      return {
        valid: isNameValid.test(value),
        errorMessage: `${
          !isNameValid.test(value) && value !== ""
            ? userDetailsValuesErrors.lastName
            : value === ""
            ? userDetailsValuesErrors.emptyLastName
            : ""
        }`,
      };

    case "day":
      return {
        valid: isDayValid.test(value),
        errorMessage: `${
          !isDayValid.test(value) && value !== ""
            ? userDetailsValuesErrors.day
            : value === ""
            ? userDetailsValuesErrors.emptyDay
            : ""
        }`,
      };
    case "month":
      return {
        valid: isMonthValid.test(value),
        errorMessage: `${
          !isMonthValid.test(value) && value !== ""
            ? userDetailsValuesErrors.month
            : value === ""
            ? userDetailsValuesErrors.emptyMonth
            : ""
        }`,
      };
    case "year":
      return {
        valid: isYearValid.test(value),
        errorMessage: `${
          !isYearValid.test(value) && value !== ""
            ? userDetailsValuesErrors.year
            : value === ""
            ? userDetailsValuesErrors.emptyYear
            : ""
        }`,
      };

    default:
      return {
        valid: false,
        errorMessage: "",
      };
  }
};

export const checkValidationFields = (obj: IValuesValidate) =>
  Object?.values(obj)?.every((element) => element.valid);
