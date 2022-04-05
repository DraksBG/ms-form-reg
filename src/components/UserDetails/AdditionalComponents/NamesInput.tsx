import { FC, useContext } from "react";
import { UserDetailsContex } from "../../../context/UserDetailsContext";
import InputField from "../../UI/InputField/InputField";

const NamesInputs: FC = ({}) => {
    const { userDetailsInputs, inputErrors, handleChange } =
        useContext(UserDetailsContex);

    return (
        <>
            <div className="w-2/5 flex flex-col text-slate-500 text-sm">
                <span className="pb-5 pl-3">Enter your details below.</span>
                <span
                    className=" pl-3 text-xs w-auto"
                    data-testid="second-sentance"
                >
                    Please ensure your details are correct before completing
                    registration. Pleaese note that you cannot add a payment
                    card to your account until it is ID verified
                </span>
            </div>
            <div className="flex flex-col w-2/5 align-baseline">
                <InputField
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    dataTestid="first-name-input"
                    errorTestId="first-name-input-error"
                    value={userDetailsInputs?.firstName}
                    errorMessage={inputErrors?.firstName.errorMessage}
                    onChange={handleChange}
                />
                <InputField
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    dataTestid="last-name-input"
                    errorTestId="last-name-input-error"
                    value={userDetailsInputs?.lastName}
                    errorMessage={inputErrors?.lastName.errorMessage}
                    onChange={handleChange}
                />
            </div>
        </>
    );
};

export default NamesInputs;
