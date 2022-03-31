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
      <pre>{JSON.stringify(inputs, null, 2)}</pre>
      <h1>User Details</h1>
      <h2>{name}</h2>
      <button onClick={() => setName("Some new new name")}>Change Name</button>
      <button onClick={() => router.push("/contact-details")}>Next Page</button>
    </RegistrationLayout>
  );
};

export default UserDetail;
