import React, { FC, useContext } from "react";
import { useRouter } from "next/router";
import { AppContext } from "../../context/state";

const AccountDetail: FC = () => {
  const router = useRouter();
  const { name, setName } = useContext(AppContext);
  return (
    <div>
      <h1>Account Details Page</h1>
      <h2>{name}</h2>
      <button onClick={() => setName("Some name")}>Change Name</button>
      <button onClick={() => router.push("/user-details")}>Next Page</button>
    </div>
  );
};

export default AccountDetail;
