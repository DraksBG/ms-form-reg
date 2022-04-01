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
