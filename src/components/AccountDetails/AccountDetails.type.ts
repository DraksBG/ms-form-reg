export interface IEmailAndPasswordState {
  email: string;
  password: string;
}

export interface IValidate {
  valid: boolean;
  errorMessage: string;
}

export interface IValuesValidate {
  email: IValidate;
  password: IValidate;
}

export interface ISecretQuestions {
  secretQuestionA: string;
  secretQuestionB: string;
}

export interface InputsInitiaState {
  initial: IEmailAndPasswordState;
  valuesValidate: IValuesValidate;
  secretQuestions: ISecretQuestions;
}

export const InitialInputValues: InputsInitiaState = {
  initial: {
    email: "",
    password: "",
  },
  valuesValidate: {
    email: { valid: false, errorMessage: "" },
    password: { valid: false, errorMessage: "" },
  },
  secretQuestions: { secretQuestionA: "", secretQuestionB: "" },
};

export const inputValuesErrors = {
  emptyEmail: "Enter a email",
  emptyPassword: "Enter a password",
  email: "Enter a valid email",
  password: "Enter a valid password",
};

export enum InputsNames {
  EMAIL = "email",
  PASSWORD = "password",
}
