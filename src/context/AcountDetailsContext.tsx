import React, { useState, createContext, FC, useEffect } from "react";
import {
    InitialInputValues,
    InputsNames,
} from "../components/AccountDetails/AccountDetails.type";
import {
    checkValidationFields,
    fieldsValidator,
} from "../lib/validators/account-details-validator";
import { IAccountDetailsContextProps } from "./ContextTpes.type";

export const AccountDetalsContext = createContext<IAccountDetailsContextProps>(
    {} as IAccountDetailsContextProps
);

const AccountDetailsProvider: FC<React.ReactNode> = ({ children }) => {
    const [inputs, setInputs] = useState(InitialInputValues);
    const [isAllAccountDetailsFieldsValid, setIsAllAccountDetailsFieldsValid] =
        useState<boolean>(false);

    useEffect(() => {
        if (inputs?.valuesValidate) {
            setIsAllAccountDetailsFieldsValid(
                checkValidationFields(inputs.valuesValidate)
            );
        }
    }, [inputs?.valuesValidate]);

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
        <AccountDetalsContext.Provider
            value={{ inputs, handleChange, isAllAccountDetailsFieldsValid }}
        >
            {children}
        </AccountDetalsContext.Provider>
    );
};
export default AccountDetailsProvider;
