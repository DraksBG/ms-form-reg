import React, { FC, useContext } from "react";
import { useRouter } from "next/router";
import { AppContext } from "../../context/state";

const ContactDetail: FC = () => {
  const router = useRouter();
  const { name, setName } = useContext(AppContext);
  return (
    <div>
      <h1>Contact Details</h1>
      <h2>{name}</h2>
      <button onClick={() => setName("Some new name")}>Change Name</button>
      <button onClick={() => router.push("/account-details")}>Next Page</button>
    </div>
  );
};

export default ContactDetail;
