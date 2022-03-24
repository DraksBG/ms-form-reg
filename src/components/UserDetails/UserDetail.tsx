import React, { FC, useContext } from "react";
import { useRouter } from "next/router";
import { AppContext } from "../../context/state";

const UserDetail: FC = () => {
  const router = useRouter();
  const { name, setName } = useContext(AppContext);
  return (
    <div>
      <h1>User Details</h1>
      <h2>{name}</h2>
      <button onClick={() => setName("Some new new name")}>Change Name</button>
      <button onClick={() => router.push("/contact-details")}>Next Page</button>
    </div>
  );
};

export default UserDetail;
