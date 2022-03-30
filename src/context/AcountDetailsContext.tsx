import React, { useState, createContext, FC } from "react";
import {
  InitialInputValues,
  InputsInitiaState,
} from "../components/AccountDetails/AccountDetails.type";

export interface IAccountDetailsContextProps {
  inputs: InputsInitiaState;
  setInputs: (inputs: InputsInitiaState) => void;
}

export const AccountDetalsContext = createContext<IAccountDetailsContextProps>(
  {} as IAccountDetailsContextProps
);

const AccountDetailsProvider: FC<React.ReactNode> = ({ children }) => {
  const [inputs, setInputs] = useState(InitialInputValues);
  return (
    <AccountDetalsContext.Provider value={{ inputs, setInputs }}>
      {children}
    </AccountDetalsContext.Provider>
  );
};
export default AccountDetailsProvider;
