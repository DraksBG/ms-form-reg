import {
  inputValuesErrors,
  IValuesValidate,
} from "../../components/AccountDetails/AccountDetails.type";
import { VALID_EMAIL_REG, VALID_PASSWORD_REG } from "./regex";

export const fieldsValidator = (value: string, name: string) => {
  const isEmailValid = new RegExp(VALID_EMAIL_REG);
  const isPasswordValid = new RegExp(VALID_PASSWORD_REG);

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

    default:
      return {
        valid: false,
        errorMessage: "",
      };
  }
};

export const checkValidationFields = (obj: IValuesValidate) =>
  Object?.values(obj)?.every((element) => element.valid);
