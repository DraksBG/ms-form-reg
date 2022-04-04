import router from "next/router";
import { useContext } from "react";
import { AccountDetalsContext } from "../../../context/AcountDetailsContext";
import { UserDetailsContex } from "../../../context/UserDetailsContext";

const Header = () => {
  const { isAllAccountDetailsFieldsValid } = useContext(AccountDetalsContext);
  const { isAllUserDetailsFieldsValid } = useContext(UserDetailsContex);
  return (
    <header className="flex justify-center items-center m-5">
      <div className="flex flex-col items-center pb-10">
        <span className="text-cyan-900 text-2xl font-bold pb-5">Register</span>
        <ul className="steps w-96">
          <li
            className={`step ${
              isAllAccountDetailsFieldsValid && "step-accent text-cyan-900"
            } font-extrabold`}
          >
            <button
              disabled={isAllAccountDetailsFieldsValid}
              onClick={() => router.push("/account-details")}
            >
              Accounts Details
            </button>
          </li>

          <li
            className={`step ${
              isAllUserDetailsFieldsValid && "step-accent text-cyan-900"
            } font-extrabold`}
          >
            <button
              disabled={isAllAccountDetailsFieldsValid}
              onClick={() => router.push("/user-details")}
              className="bg-none text-inherit border-none p-0 font-inherit outline-inherit"
            >
              User Details
            </button>
          </li>
          <li className="step text-cyan-900 font-extrabold">Contact Details</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
