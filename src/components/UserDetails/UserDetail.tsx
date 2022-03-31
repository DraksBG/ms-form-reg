import React, { FC, useContext } from "react";
import { useRouter } from "next/router";
import { AppContext } from "../../context/state";
import { AccountDetalsContext } from "../../context/AcountDetailsContext";
import RegistrationLayout from "../Layout/RegistrationPageLayout/RegistrationLayout";

const UserDetail: FC = () => {
  const router = useRouter();
  const { name, setName } = useContext(AppContext);
  const { inputs } = useContext(AccountDetalsContext);
  return (
    <RegistrationLayout>
      <div>
        <span>Enter your details below.</span>
      </div>
    </RegistrationLayout>
  );
};

export default UserDetail;
