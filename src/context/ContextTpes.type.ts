import { InputsInitiaState } from "../components/AccountDetails/AccountDetails.type";
import {
    IBirthDayInputsErrors,
    IBirthDayInputsFields,
    INamesInputErrors,
    INamesInputsFields,
} from "../components/UserDetails/UserDetails.type";

export interface IAccountDetailsContextProps {
    inputs: InputsInitiaState;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isAllAccountDetailsFieldsValid: boolean;
}

export interface IUserDetailsContextProps {
    userDetailsInputs: INamesInputsFields;
    inputErrors: INamesInputErrors;
    birthDayInputs: IBirthDayInputsFields;
    birthDayInputErrors: IBirthDayInputsErrors;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isAllUserDetailsFieldsValid: boolean;
}

export interface IContactDetailsContextProps {
    isAgreedToTerms: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
