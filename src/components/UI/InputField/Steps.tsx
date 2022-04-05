import { FC, useContext } from "react";
import { AccountDetalsContext } from "../../../context/AcountDetailsContext";
import { ContactDetailsContext } from "../../../context/ContactsDetailsContext";
import { UserDetailsContex } from "../../../context/UserDetailsContext";
import Step from "./Step";

const Steps: FC = () => {
    const { isAllAccountDetailsFieldsValid } = useContext(AccountDetalsContext);
    const { isAllUserDetailsFieldsValid } = useContext(UserDetailsContex);
    const { isAgreedToTerms } = useContext(ContactDetailsContext);
    const stepsArr = [
        {
            isValidToContinue: isAllAccountDetailsFieldsValid,
            stepName: "Account Details",
            routePath: "/account-details",
        },
        {
            isValidToContinue: isAllUserDetailsFieldsValid,
            stepName: "User Details",
            routePath: "/user-details",
        },
        {
            isValidToContinue: isAgreedToTerms,
            stepName: "Contact Details",
            routePath: "/contact-details",
        },
    ];
    return (
        <ul className="steps">
            {stepsArr.map((step, index) => (
                <Step
                    key={index}
                    isValidToContinue={step.isValidToContinue}
                    stepName={step.stepName}
                    routePath={step.routePath}
                />
            ))}
        </ul>
    );
};

export default Steps;
