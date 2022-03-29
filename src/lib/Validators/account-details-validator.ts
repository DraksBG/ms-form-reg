import {
  inputValuesErrors,
  IValuesValidate,
} from "../../components/AccountDetails/AccountDetails.type";
import { VALID_EMAIL_REG, VALID_PASSWORD_REG } from "./regex";

export const authFieldsValidator = (value: string, name: string) => {
  let validator;

  const isEmailValid = new RegExp(VALID_EMAIL_REG);
  const isPasswordValid = new RegExp(VALID_PASSWORD_REG);

  switch (name) {
    case "email":
      validator = {
        valid: isEmailValid.test(value),
        errorMessage: `${
          !isEmailValid.test(value) && value !== ""
            ? inputValuesErrors.email
            : value === ""
            ? inputValuesErrors.emptyEmail
            : ""
        }`,
      };
      break;

    case "password":
      validator = {
        valid: isPasswordValid.test(value),
        errorMessage: `${
          !isPasswordValid.test(value) && value !== ""
            ? inputValuesErrors.password
            : value === ""
            ? inputValuesErrors.emptyPassword
            : ""
        }`,
      };
      break;

    case "secretQuestionA":
      validator = {
        valid: value !== "",
        errorMessage: `${
          value === "" ? inputValuesErrors.emptySecurityQuestionA : ""
        }`,
      };
      break;
    case "secretQuestionB":
      validator = {
        valid: value !== "",
        errorMessage: `${
          value === "" ? inputValuesErrors.emptySecurityQuestionB : ""
        }`,
      };
      break;

    default:
      validator = {
        valid: false,
        errorMessage: "",
      };
      break;
  }

  return validator;
};

export const checkValidationFields = (obj: IValuesValidate) =>
  Object.values(obj).every((ele) => ele.valid);
