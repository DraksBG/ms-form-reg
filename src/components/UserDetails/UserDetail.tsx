import React, { FC, useContext } from "react";
import { UserDetailsContex } from "../../context/UserDetailsContext";

import RegistrationLayout from "../Layout/RegistrationPageLayout/RegistrationLayout";

import NextPageButton from "../UI/InputField/NextPageButton";
import DateOfBirth from "./AdditionalComponents/DateOfBirth";
import GenderSelect from "./AdditionalComponents/GenderSlect";
import NamesInputs from "./AdditionalComponents/NamesInput";

const UserDetail: FC = () => {
    const { isAllUserDetailsFieldsValid } = useContext(UserDetailsContex);
    return (
        <RegistrationLayout>
            <NamesInputs />
            <DateOfBirth />
            <GenderSelect />
            <NextPageButton
                pageRoute={"/contact-details"}
                disabled={!isAllUserDetailsFieldsValid}
            />
        </RegistrationLayout>
    );
};

export default UserDetail;
