import React, { FC, useContext, useState, useEffect } from "react";
import { AccountDetalsContext } from "../../context/AcountDetailsContext";
import { checkValidationFields } from "../../lib/validators/account-details-validator";
import SecurityQuestions from "./AdditionalComponents/SecurityQuestions";
import MarketingPreferences from "./AdditionalComponents/MarketingPreferences";
import RegisterFields from "./AdditionalComponents/RegisterFields";
import NextPageButton from "../UI/InputField/NextPageButton";
import RegistrationLayout from "../Layout/RegistrationPageLayout/RegistrationLayout";

const AccountDetails: FC = () => {
    const { inputs, handleChange, isAllAccountDetailsFieldsValid } =
        useContext(AccountDetalsContext);

    return (
        <RegistrationLayout>
            <div className="mr-40 ml-40 flex flex-col items-center w-full">
                <RegisterFields
                    handleChange={handleChange}
                    localState={inputs}
                />
                <SecurityQuestions
                    handleChange={handleChange}
                    localState={inputs}
                />
                <MarketingPreferences />
                <NextPageButton
                    disabled={!isAllAccountDetailsFieldsValid}
                    pageRoute={"/user-details"}
                />
            </div>
        </RegistrationLayout>
    );
};

export default AccountDetails;
