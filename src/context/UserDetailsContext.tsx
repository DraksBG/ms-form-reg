import React, { useState, createContext, FC } from "react";
import {
  birthDayInputsErrors,
  birthDayInputsFields,
  namesInputsErrors,
  namesInputsFields,
} from "../components/UserDetails/UserDetails.type";
import { fieldsValidator } from "../lib/validators/account-details-validator";
import { IUserDetailsContextProps } from "./ContextTpes.type";

export const UserDetailsContex = createContext<IUserDetailsContextProps>(
  {} as IUserDetailsContextProps
);

export const UserDetailsProvider: FC<React.ReactNode> = ({ children }) => {
  const [inputs, setInputs] = useState(namesInputsFields);
  const [inputErrors, setInputErrors] = useState(namesInputsErrors);
  const [birthDayInputs, setBirthDayInputs] = useState(birthDayInputsFields);
  const [birthDayInputErrors, setBirthDayInputErrors] =
    useState(birthDayInputsErrors);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (inputs && inputErrors && birthDayInputs && birthDayInputErrors) {
      const newValuesState = {
        ...inputs,
      };
      const newValuesValidateState = {
        ...inputErrors,
      };

      const currentElement = e.currentTarget;
      const targetName = currentElement.name as keyof typeof namesInputsFields;
      const targetValue = currentElement.value;

      newValuesState[targetName] = targetValue;
      newValuesValidateState[targetName] = fieldsValidator(
        targetValue,
        targetName
      );
      setInputs(newValuesState);

      setInputErrors(newValuesValidateState);

      setBirthDayInputs({
        ...birthDayInputs,
        [e.currentTarget.name]: e.currentTarget.value,
      });

      setBirthDayInputErrors({
        ...birthDayInputErrors,
        [e.currentTarget.name]: fieldsValidator(
          e.currentTarget.value,
          e.currentTarget.name
        ),
      });
    }
  };

  return (
    <UserDetailsContex.Provider
      value={{
        inputs,
        inputErrors,
        birthDayInputs,
        birthDayInputErrors,
        handleChange,
      }}
    >
      {children}
    </UserDetailsContex.Provider>
  );
};
