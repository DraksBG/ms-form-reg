import React, { useState, createContext, FC, useEffect } from "react";
import {
    birthDayInputsErrors,
    birthDayInputsFields,
    IBirthDayInputsErrors,
    INamesInputErrors,
    namesInputsErrors,
    namesInputsFields,
} from "../components/UserDetails/UserDetails.type";
import {
    checkValidationFields,
    fieldsValidator,
} from "../lib/validators/account-details-validator";
import { IUserDetailsContextProps } from "./ContextTpes.type";

export const UserDetailsContex = createContext<IUserDetailsContextProps>(
    {} as IUserDetailsContextProps
);

export const UserDetailsProvider: FC<React.ReactNode> = ({ children }) => {
    const [userDetailsInputs, setUserDetailsInputs] =
        useState(namesInputsFields);
    const [inputErrors, setInputErrors] =
        useState<INamesInputErrors>(namesInputsErrors);
    const [birthDayInputs, setBirthDayInputs] = useState(birthDayInputsFields);
    const [birthDayInputErrors, setBirthDayInputErrors] =
        useState<IBirthDayInputsErrors>(birthDayInputsErrors);
    const [isNamesFieldsValid, setIsNamesFieldsValid] =
        useState<boolean>(false);
    const [isBirthDayFieldsValid, setIsBirthDayFieldsValid] =
        useState<boolean>(false);
    const [isAllUserDetailsFieldsValid, setIsAllUserDetailsFieldsValid] =
        useState<boolean>(false);

    useEffect(() => {
        if (inputErrors) {
            setIsNamesFieldsValid(checkValidationFields(inputErrors));
        }
        if (birthDayInputErrors) {
            setIsBirthDayFieldsValid(
                checkValidationFields(birthDayInputErrors)
            );
        }
        if (isNamesFieldsValid && isBirthDayFieldsValid) {
            setIsAllUserDetailsFieldsValid(true);
        }
    }, [
        inputErrors,
        birthDayInputErrors,
        isNamesFieldsValid,
        isBirthDayFieldsValid,
    ]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (
            userDetailsInputs &&
            inputErrors &&
            birthDayInputs &&
            birthDayInputErrors
        ) {
            const newValuesState = {
                ...userDetailsInputs,
            };
            const newValuesValidateState = {
                ...inputErrors,
            };

            const currentElement = e.currentTarget;
            const targetName =
                currentElement.name as keyof typeof namesInputsFields;
            const targetValue = currentElement.value;

            newValuesState[targetName] = targetValue;
            newValuesValidateState[targetName] = fieldsValidator(
                targetValue,
                targetName
            );
            setUserDetailsInputs(newValuesState);

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
                userDetailsInputs,
                inputErrors,
                birthDayInputs,
                birthDayInputErrors,
                handleChange,
                isAllUserDetailsFieldsValid,
            }}
        >
            {children}
        </UserDetailsContex.Provider>
    );
};
