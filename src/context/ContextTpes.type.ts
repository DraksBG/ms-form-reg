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
}

export interface IUserDetailsContextProps {
  inputs: INamesInputsFields;
  inputErrors: INamesInputErrors;
  birthDayInputs: IBirthDayInputsFields;
  birthDayInputErrors: IBirthDayInputsErrors;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
