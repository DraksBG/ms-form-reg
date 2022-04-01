import { FC } from "react";
import InputField from "../../UI/InputField/InputField";
import { Props } from "./SecurityQuestions";

const RegisterFields: FC<Props> = ({ handleChange, localState }) => {
  return (
    <div className="flex flex-col w-2/5">
      <InputField
        type="email"
        onChange={handleChange}
        value={localState?.initial.email}
        errorMessage={localState?.valuesValidate.email.errorMessage}
        isValid={localState?.valuesValidate.email.valid}
        placeholder="Email"
        name="email"
        dataTestid="email"
        errorTestId="email-error"
      />
      <InputField
        type="password"
        showPassword
        onChange={handleChange}
        value={localState?.initial.password}
        errorMessage={localState?.valuesValidate.password.errorMessage}
        isValid={localState?.valuesValidate.password.valid}
        placeholder="Password"
        name="password"
        dataTestid="password"
        errorTestId="password-error"
      />
      <div className="w-auto flex flex-col text-xs text-slate-500 border-b-2 mb-3 pl-5">
        <span className="m-0.5">8 - 12 characters</span>
        <span className="m-0.5">At least one letter</span>
        <span className="m-0.5">At least one number</span>
        <span className="m-0.5">No special characters</span>
        <span className="m-0.5 mb-5">
          Can not include your First, Last, name or email
        </span>
      </div>
    </div>
  );
};

export default RegisterFields;
