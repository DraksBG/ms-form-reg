import { inputValuesErrors } from "../../components/AccountDetails/AccountDetails.type";
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

    default:
      validator = {
        valid: false,
        errorMessage: "",
      };
      break;
  }

  return validator;
};
