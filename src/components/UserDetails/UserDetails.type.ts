import { IValidate } from "../AccountDetails/AccountDetails.type";
export const genderArrInputs = [
    {
        type: "radio",
        value: "Male",
        id: "male-input",
        dataTestid: "male-input",
        htmlFor: "male-input",
    },
    {
        type: "radio",
        value: "Female",
        id: "female-input",
        dataTestid: "female-input",
        htmlFor: "female-input",
    },
];

export const dateOfBirthInputs = [
    {
        className: "w-1/5 border border-gray-400 rounded-md py-3 px-5 mr-3",
        type: "text",
        placeholder: "DD",
        dataTestId: "day-input",
    },
    {
        className: "w-1/5 border border-gray-400 rounded-md py-3 px-5 mr-3",
        type: "text",
        placeholder: "MM",
        dataTestId: "month-input",
    },
    {
        className: "w-1/4 border border-gray-400 rounded-md py-3 px-5 mr-3",
        type: "text",
        placeholder: "YYYY",
        dataTestId: "year-input",
    },
];

export const namesInputs = [
    {
        name: "first-name-input",
        type: "text",
        placeholder: "First Name",
        dataTestId: "first-name-input",
        errorTestId: "first-name-input-error",
    },
    {
        name: "last-name-input",
        type: "text",
        placeholder: "Last Name",
        dataTestId: "last-name-input",
        errorTestId: "last-name-input-error",
    },
];
export interface IGender {
    gender: string;
}

export interface INamesInputsFields extends IGender {
    firstName: string;
    lastName: string;
}
export interface INamesInputErrors {
    firstName: IValidate;
    lastName: IValidate;
    gender?: IValidate;
}

export interface IBirthDayInputsFields {
    day: string;
    month: string;
    year: string;
}

export interface IBirthDayInputsErrors {
    day: IValidate;
    month: IValidate;
    year: IValidate;
}

export const namesInputsFields: INamesInputsFields = {
    firstName: "",
    lastName: "",
    gender: "",
};

export const namesInputsErrors: INamesInputErrors = {
    firstName: { valid: false, errorMessage: "" },
    lastName: { valid: false, errorMessage: "" },
};

export const birthDayInputsFields: IBirthDayInputsFields = {
    day: "",
    month: "",
    year: "",
};

export const birthDayInputsErrors: IBirthDayInputsErrors = {
    day: { valid: false, errorMessage: "" },
    month: { valid: false, errorMessage: "" },
    year: { valid: false, errorMessage: "" },
};

export const userDetailsValuesErrors = {
    emptyFirstName: "Enter first name",
    emptyLastName: "Enter last name",
    firstName: "Enter a valid first name",
    lastName: "Enter a valid last name",
    emptyDay: "Enter day",
    emptyMonth: "Enter month",
    emptyYear: "Enter year",
    day: "Enter a valid day",
    month: "Enter a valid month",
    year: "Enter a valid year",
};
