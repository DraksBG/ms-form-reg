export interface IEmailAndPasswordState {
  email: string;
  password: string;
  secretQuestionA: string;
  secretQuestionB: string;
}

export interface IValidate {
  valid: boolean;
  errorMessage: string;
}

export interface IValuesValidate {
  email: IValidate;
  password: IValidate;
  secretQuestionA: IValidate;
  secretQuestionB: IValidate;
}

export interface ISecretQuestions {
  secretQuestionA: string;
  secretQuestionB: string;
}

export interface InputsInitiaState {
  initial: IEmailAndPasswordState;
  valuesValidate: IValuesValidate;
}

export const InitialInputValues: InputsInitiaState = {
  initial: {
    email: "",
    password: "",
    secretQuestionA: "",
    secretQuestionB: "",
  },
  valuesValidate: {
    email: { valid: false, errorMessage: "" },
    password: { valid: false, errorMessage: "" },
    secretQuestionA: { valid: false, errorMessage: "" },
    secretQuestionB: { valid: false, errorMessage: "" },
  },
};

export const inputValuesErrors = {
  emptyEmail: "Enter a email",
  emptyPassword: "Enter a password",
  emptySecurityQuestionA: "Enter a question that only you would know",
  emptySecurityQuestionB: "Enter a question that only you would know",
  email: "Enter a valid email",
  password: "Enter a valid password",
};

export enum InputsNames {
  EMAIL = "email",
  PASSWORD = "password",
}
