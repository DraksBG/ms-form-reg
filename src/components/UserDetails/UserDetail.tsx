import React, { FC } from "react";

import RegistrationLayout from "../Layout/RegistrationPageLayout/RegistrationLayout";

import NextPageButton from "../UI/InputField/NextPageButton";
import DateOfBirth from "./AdditionalComponents/DateOfBirth";
import GenderSelect from "./AdditionalComponents/GenderSlect";
import NamesInputs from "./AdditionalComponents/NamesInput";

const UserDetail: FC = () => {
  return (
    <RegistrationLayout>
      <NamesInputs />
      <DateOfBirth />
      <GenderSelect />
      <NextPageButton pageRoute={"/contact-details"} />
    </RegistrationLayout>
  );
};

export default UserDetail;
