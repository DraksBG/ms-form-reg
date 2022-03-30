import React, { useState, createContext, FC } from "react";
import {
  InitialInputValues,
  InputsInitiaState,
  InputsNames,
} from "../components/AccountDetails/AccountDetails.type";
import { fieldsValidator } from "../lib/validators/account-details-validator";

export interface IAccountDetailsContextProps {
  inputs: InputsInitiaState;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AccountDetalsContext = createContext<IAccountDetailsContextProps>(
  {} as IAccountDetailsContextProps
);

const AccountDetailsProvider: FC<React.ReactNode> = ({ children }) => {
  const [inputs, setInputs] = useState(InitialInputValues);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (inputs) {
      const newValuesState = {
        ...inputs["initial"],
      };
      const newValuesValidateState = {
        ...inputs["valuesValidate"],
      };

      const currentElement = e.currentTarget;
      const targetName = currentElement.name as InputsNames;
      const targetValue = currentElement.value;

      newValuesState[targetName] = targetValue;
      newValuesValidateState[targetName] = fieldsValidator(
        targetValue,
        targetName
      );
      setInputs({
        ["initial"]: newValuesState,
        ["valuesValidate"]: newValuesValidateState,
      });
    }
  };
  return (
    <AccountDetalsContext.Provider value={{ inputs, handleChange }}>
      {children}
    </AccountDetalsContext.Provider>
  );
};
export default AccountDetailsProvider;
